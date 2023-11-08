import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListingsComponent } from './listings.component';



@NgModule({
  exports: [ListingsComponent],
  declarations: [ListingsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class ListingsModule { }
