import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent {
  imageTitle: string = '';
  imageUrl: string = '';

  pictureData!: any;
  isHuman:boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {    
    this.imageTitle = data.name;
    this.imageUrl = data.image;

    this.isHuman = (data.species == 'human');
  }
}
