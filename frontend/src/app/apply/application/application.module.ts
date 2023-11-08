import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [ApplicationComponent],
  declarations: [ApplicationComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class ApplicationModule { }
