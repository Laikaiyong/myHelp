import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest_api.service';
import { MarkdownModule } from 'ngx-markdown';

import { LoadingController } from '@ionic/angular';

// import { TextServiceClient } from "@google-ai/generativelanguage";
// import { GoogleAuth } from "google-auth-library";

@Component({
  selector: 'app-generate',
  templateUrl: './gen.page.html',
  styleUrls: ['./gen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MarkdownModule],
})
export class GeneratePage {
  inputPrompt: string = '';
  generatedText: string = '';
  generating: boolean = false;

  ionViewWillEnter() {
    const elements = document.getElementsByTagName(
      'ion-tab-bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }

  ionViewWillLeave() {
    const elements = document.getElementsByTagName(
      'ion-tab-bar'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'flex';
    }
  }

  ngOnInit() {}

  generateText(promptText: string) {
    this.generating = true;
    this.apiService.generateText(promptText).subscribe({
      next: (response) => {
        this.generatedText = response;
      },
      error: (error) => {
        console.error('Error generating text:', error);
      },
      complete: () => {
        console.log('Text generation completed');
      },
    });
    this.generating = false;
  }

  constructor(private apiService: RestApiService) {}
}
