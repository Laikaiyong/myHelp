import { Component } from '@angular/core';
import { BrowseComponent } from '../browse/browse.component';
import { ApplicationComponent } from '../application/application.component';

// import { TextServiceClient } from "@google-ai/generativelanguage";
// import { GoogleAuth } from "google-auth-library";

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage {
  ionViewWillEnter() {
    const elements = document.getElementsByTagName('ion-tab-bar') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }

  ionViewWillLeave() {
      const elements = document.getElementsByTagName('ion-tab-bar') as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
      }
  }

  segmentList: Array<string> = ["Browse", "Application"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    BrowseComponent, ApplicationComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }

  ngOnInit() {
  }
  
  constructor() { }

}

