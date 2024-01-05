import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery-details.page.html',
  // styleUrls: ['./library.component.scss'],\
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DeliveryDetailPage implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
}
