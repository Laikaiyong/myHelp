import { Component } from '@angular/core';
import { LibraryComponent } from './library/library.component';
// import { GrantComponent } from './book/book.component';
// import { ScholarshipComponent } from './scholarship/scholarship.component';
// import { ApplicationComponent } from './application/application.component';


@Component({
    selector: 'app-book',
    templateUrl: './book.page.html',
    styleUrls: ['./book.page.scss'],
})


export class BookPage {
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
  
  segmentList: Array<string> = ["Library", "Cart", "Delivery"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    LibraryComponent, LibraryComponent, LibraryComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }
  
  constructor() {}
}



