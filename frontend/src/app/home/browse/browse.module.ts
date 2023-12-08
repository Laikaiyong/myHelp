import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse.component';


@NgModule({
  exports: [BrowseComponent],
  declarations: [BrowseComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class BrowseModule { }
