import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-sponsoring',
  templateUrl: './sponsoring.page.html',
  styleUrls: ['./sponsoring.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SponsoringPage implements OnInit {
    constructor(private sponsor: SponsorService) {}

    totalSteps = 2;


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

    public data = {
        step: 1,
        form: {
        value1: undefined,
        value2: undefined,
        value3: undefined
        }
    }

  submit = async () => {
    this.sponsor.addSponsorPackage({
      'sponsorshipName': 'Empowerment Partner',
      'amount': 15000,
      'paymentMethod': 'Oline Banking'
    });
  }

  nextStep = () => {
    if (this.data.step < this.totalSteps)
    {
        this.data.step += 1;
    }
  }

  ngOnInit() {
  }
}
