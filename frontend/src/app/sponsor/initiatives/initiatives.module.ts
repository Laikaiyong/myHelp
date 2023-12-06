import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativesComponent } from './initiatives.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [InitiativesComponent],
  declarations: [InitiativesComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class InitiativesModule { }
