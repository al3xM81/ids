import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
