import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SwDataService } from 'src/app/services/sw-data.service';

import { ModalImageComponent } from 'src/app/modals/modal-image/modal-image.component';

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
        console.log(this.allData);
      })
  }

  showImage(event: any) {
    console.log(event);
    this.dialog.open(ModalImageComponent, {
      data: event
    });
  }

  addImage()  {
    this.dialog.open(ModalImageComponent, {

    });
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

  changePage(event: any)  {

  }
}
