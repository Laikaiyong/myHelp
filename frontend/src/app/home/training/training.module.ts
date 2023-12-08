import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingPage } from './training.page';
import { ApplicationModule } from '../application/application.module';
import { BrowseModule } from '../browse/browse.module';
import { TrainingPageRoutingModule } from './training-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TrainingPageRoutingModule,
    ApplicationModule,
    BrowseModule
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
