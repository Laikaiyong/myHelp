import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationstateService {

  constructor() { }

  private showNavBar = new BehaviorSubject<boolean>(true);

  setShowNavBar(value: boolean) {
    this.showNavBar.next(value);
  }

  getShowNavBar() {
    return this.showNavBar.asObservable();
  }
}
