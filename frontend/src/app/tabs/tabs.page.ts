import { Component } from '@angular/core';
import { NavigationstateService } from '../services/navigationstate.service';
import { Observable } from 'rxjs';

interface NavItem {
  name: string,
  path: string,
  title: string,
  icon: string
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage {
  
  public role: string = localStorage.getItem('role') ?? "b40";

  // showNavBar$: Observable<boolean>;
  
  constructor(private navigationState: NavigationstateService) {
    // this.showNavBar$ = this.navigationState.getShowNavBar();
    if (!localStorage.getItem('role'))
    {
      localStorage.setItem('role', "b40");
    }
  }

  tabs: Record<string, Partial<NavItem[]>> = {
    b40: [
        {
          name: "home",
          path: '/home',
          title: "Home",
          icon: "home"
        },
        {
          name: "learn",
          path: '/learn',
          title: "Learn",
          icon: "book"
        },
        {
          name: 'apply',
          path: '/apply',
          title: "Apply",
          icon: "bookmarks"
        },
        {
          name: 'jobs',
          path: '/jobs',
          title: "Jobs",
          icon: "briefcase"
        },
        {
          name: 'profile',
          path: '/profile',
          title: "Profile",
          icon: "person-circle"
        },
      ],
      company: [
        {
          name: "home",
          icon: "home",
          path: '/home',
          title: "Home"
        },
        {
          name: 'sponsor',
          icon: 'trophy',
          path: '/sponsor',
          title: "Sponsor"
        },
        {
          name: 'jobs',
          path: '/jobs',
          title: "Jobs",
          icon: "briefcase"
        },
        {
          name: 'profile',
          path: '/profile',
          title: "Profile",
          icon: "person-circle"
        },
      ],
      government: [
        {
          name: "home",
          icon: "home",
          path: '/home',
          title: "Home",
        },
        {
          name: 'performance',
          icon: 'trophy',
          path: '/peformance',
          title: "Peformance"
        },
        {
          name: 'profile',
          path: '/profile',
          title: "Profile",
          icon: "person-circle"
        },
      ]
  };
}
