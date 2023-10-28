import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.page.html',
  styleUrls: ['./scholarship.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ScholarshipPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
