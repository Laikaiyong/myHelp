import { Component } from '@angular/core';
import { ListingsComponent } from './listings/listings.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApplicationComponent } from './application/application.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage {
  segmentList: Array<string> = ["Listings", "Companies", "Application"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    ListingsComponent, CompaniesComponent, ApplicationComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }
  
  constructor() {}
}

