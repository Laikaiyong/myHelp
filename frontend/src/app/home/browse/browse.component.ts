import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest_api.service';

// import { TextServiceClient } from "@google-ai/generativelanguage";
// import { GoogleAuth } from "google-auth-library";

@Component({
  selector: 'app-browse-training',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
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

  filters = [
    "Google",
    "Meta",
    "Microsoft"
  ]

  training = [
    {
      image: "../assets/images/training/techpro.svg",
      title: "Tech Professional",
      desc: "Microsoft | Free",
      path: ""
    },
    {
      image: "../assets/images/training/uxdesign.svg",
      title: "UX Design",
      desc: "Technology | 100 hours"
    },
    {
      image: "../../assets/images/sponsorship/excelerate.svg",
      title: "Excelerate Asia",
      desc: "Excelerate | Free"
    }
  ]

  training1 = [
    {
      image: "../assets/images/training/stakeholder.svg",
      title: "Stakeholder Management",
      desc: "Google | Free"
    },
    {
      image: "../assets/images/training/productmanage.svg",
      title: "Product Management",
      desc: "General Assembly | Free"
    },
    {
      image: "../assets/images/training/projectmanage.svg",
      title: "Project Management",
      desc: "Jira | Free"
    },
  ]

  sponsorships = [
    {
      image: "../../assets/images/sponsorship/google.svg",
      title: "Googel Cloud Certified",
      desc: "Google"
    },
    {
      image: "../../assets/images/sponsorship/bank_view.svg",
      title: "Banking Secret",
      desc: "Maybank"
    },
    {
      image: "../../assets/images/sponsorship/excelerate.svg",
      title: "Excelerate Asia",
      desc: "Excelerate | Free"
    },
  ]

  

  // generateText() {
  //   const MODEL_NAME = "models/text-bison-001";
  //   // const API_KEY = process.env.API_KEY;
  //   const API_KEY = "AIzaSyAEJ5xUSlq0bw-0z5awQD2_7wrH21XQ5-0";

  //   const client = new TextServiceClient({
  //     authClient: new GoogleAuth().fromAPIKey(API_KEY),
  //   });

  //   const prompt = "Repeat after me: one, two,";

  //   client
  //     .generateText({
  //       model: MODEL_NAME,
  //       prompt: {
  //         text: prompt,
  //       },
  //     })
  //     .then((result) => {
  //       console.log(JSON.stringify(result, null, 2));
  //       this.generatedText = JSON.stringify(result, null, 2);
  //     });
  // }


  ngOnInit() {
  }
  
  constructor(private apiService: RestApiService) { }

}

