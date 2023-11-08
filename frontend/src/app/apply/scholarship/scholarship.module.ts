import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipComponent } from './scholarship.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [ScholarshipComponent],
  declarations: [ScholarshipComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class ScholarshipModule { }
