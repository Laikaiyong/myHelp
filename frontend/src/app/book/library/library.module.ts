import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [LibraryComponent],
  declarations: [LibraryComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class LibraryModule { }
