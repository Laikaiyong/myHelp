import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AssessmentComponent } from './assessment/assessment.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage {
  segmentList: Array<string> = ["Courses", "Assessment"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    CoursesComponent, AssessmentComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }
  
  constructor() {}
}

