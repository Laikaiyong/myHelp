import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [CompaniesComponent],
  declarations: [CompaniesComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class CompaniesModule { }
