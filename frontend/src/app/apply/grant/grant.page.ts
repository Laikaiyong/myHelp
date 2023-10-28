import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.page.html',
  styleUrls: ['./grant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GrantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
