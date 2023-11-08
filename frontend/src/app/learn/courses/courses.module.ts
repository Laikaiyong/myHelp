import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [CoursesComponent],
  declarations: [CoursesComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class CoursesModule { }
