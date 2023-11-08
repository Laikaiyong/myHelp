import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearnPage } from './learn.page';

import { LearnPageRoutingModule } from './learn-routing.module';
import { CoursesModule } from './courses/courses.module';
import { AssessmentModule } from './assessment/assessment.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LearnPageRoutingModule,
    CoursesModule,
    AssessmentModule
  ],
  declarations: [LearnPage]
})
export class LearnPageModule {}
