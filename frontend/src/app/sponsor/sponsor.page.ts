import { Component } from '@angular/core';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { PackagesComponent } from './packages/packages.component';
import { SponsoredComponent } from './sponsored/sponsored.component';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.page.html',
  styleUrls: ['./sponsor.page.scss'],
})
export class SponsorPage {
  segmentList: Array<string> = ["Initiatives", "Packages", "Sponsored"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    InitiativesComponent, PackagesComponent, SponsoredComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }

  constructor() { }
}

