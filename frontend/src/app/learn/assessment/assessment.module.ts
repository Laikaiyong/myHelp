import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [AssessmentComponent],
  declarations: [AssessmentComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class AssessmentModule { }
