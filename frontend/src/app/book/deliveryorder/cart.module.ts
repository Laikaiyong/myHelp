import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [CartComponent],
  declarations: [CartComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class CartModule { }
