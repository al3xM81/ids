import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SwDataService } from 'src/app/services/sw-data.service';

import { ModalImageComponent } from 'src/app/modals/modal-image/modal-image.component';
import { AddNewComponent } from 'src/app/modals/add-new/add-new.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent {

  allData: any[] = [];
  filteredData: any[] = [];

  _searchTerm: string = '';

  // for pagination
  pageIndex = 0;
  pageSize = 10;

  constructor(private swData: SwDataService, public dialog: MatDialog) {
    this.requestImages();
  }

  // Make request to Star Wars public API
  private requestImages() {
    this.swData.getAllImages()
      .subscribe(data =>  {
        this.allData = data;
        this.filteredData = this.allData;
      })
  }

  // Opens modal to show image with more data
  showImage(event: any) {
    this.dialog.open(ModalImageComponent, {
      data: event
    });
  }

  // Opens modal form to add new image
  addImage()  {
    let newData: any = null;
    const dialogRef = this.dialog.open(AddNewComponent, {
      width: '360px',
      height: '380px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        newData = result;
        this.addNewImage(newData);
      }
    })
  }

  // Adds new image data to allData array
  private addNewImage(data: any) {
    this.allData.push(data);
    this.filteredData = this.allData;

    this.searchTerm = this._searchTerm;
  }

  // For filtering purposes
  public set searchTerm(term: string) {
    this._searchTerm = term;

    if (this._searchTerm.trim() === "")
      this.filteredData = this.allData;
    else
      this.filteredData = this.filter(this._searchTerm);
  }

  public get searchTerm(): string {
    return this._searchTerm;
  }

  filter(val: string) {
    return this.allData.filter(x => x.name?.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }
}
