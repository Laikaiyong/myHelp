import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [CommunityComponent],
  declarations: [CommunityComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class CommunityModule { }
