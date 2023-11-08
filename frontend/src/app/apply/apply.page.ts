import { Component } from '@angular/core';
import { GrantComponent } from './grant/grant.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ApplicationComponent } from './application/application.component';


@Component({
    selector: 'app-apply',
    templateUrl: './apply.page.html',
    styleUrls: ['./apply.page.scss'],
})


export class ApplyPage {
  segmentList: Array<string> = ["Grant", "Scholarship", "Application"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    GrantComponent, ScholarshipComponent, ApplicationComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }
  
  constructor() {}
}



