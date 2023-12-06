import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsoredComponent } from './sponsored.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [SponsoredComponent],
  declarations: [SponsoredComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class SponsoredModule { }
