import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApplicationComponent } from './application.component';


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
