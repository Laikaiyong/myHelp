import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [DeliveryComponent],
  declarations: [DeliveryComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class DeliveryModule { }
