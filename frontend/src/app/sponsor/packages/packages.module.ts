import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [PackagesComponent],
  declarations: [PackagesComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class PackagesModule { }
