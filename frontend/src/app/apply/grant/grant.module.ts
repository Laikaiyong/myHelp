import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantComponent } from './grant.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [GrantComponent],
  declarations: [GrantComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class GrantModule { }
