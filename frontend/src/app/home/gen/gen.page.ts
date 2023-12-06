import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest_api.service';

// import { TextServiceClient } from "@google-ai/generativelanguage";
// import { GoogleAuth } from "google-auth-library";

@Component({
  selector: 'app-generate',
  templateUrl: './gen.page.html',
  styleUrls: ['./gen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneratePage {
  generatedText: string = "";



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
    this.generateText("who are you?");
  }

  generateText(promptText: string) {
    this.apiService.generateText(promptText)
      .subscribe(
        response => this.generatedText = response,
        error => console.error('Error generating text:', error)
      );
  }
  
  constructor(private apiService: RestApiService) { }

}

