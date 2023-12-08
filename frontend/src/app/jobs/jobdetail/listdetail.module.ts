import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListDetailPage } from './listdetail.page';

@NgModule({
  exports: [ListDetailPage],
  declarations: [ListDetailPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class ListingsModule { }
