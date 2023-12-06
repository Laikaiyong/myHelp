import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeaderboardPage implements OnInit {
  constructor() {}

  ranks = [
    {
      title: "Maybank",
      subtitle: "800,000 points",
      badge: 4,
    },
    {
      title: "Petronas",
      subtitle: "800,000 points",
      badge: 5,
    },
    {
      title: "Mondelez International",
      subtitle: "700,000 points",
      badge: 6,
    },
    {
      title: "Razer Technologies",
      subtitle: "700,000 points",
      badge: 7,
    },
    {
      title: "IBM",
      subtitle: "700,000 points",
      badge: 8,
    },
  ]

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

  ngOnInit() {
  }
}
