import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListingsComponent } from './companydetail.page';



@NgModule({
  exports: [ListingsComponent],
  declarations: [ListingsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListingsModule { }
