import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest_api.service';

@Component({
  selector: 'app-training-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  host: {'some-binding': 'some-value'}
})
export class ApplicationComponent {
    trainings = [
    {
      title: "Microsoft Office Training",
    },
    {
      title: "Stakeholder Management",
    },
    {
      title: "Google Cloud Training",
    },
  ]
  pastTrainings = [
    {
      title: "English Language Training",
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
  
  constructor(private apiService: RestApiService) { }

}

