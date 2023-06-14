import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input('url') public imageUrl!: string;
  @Input('title') public imageTitle!: string;

}
