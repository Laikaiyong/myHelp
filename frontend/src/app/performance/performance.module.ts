import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerformancePage } from './performance.page';

import { PerformancePageRoutingModule } from './performance-routing.module';
import { CommunityModule } from './community/community.module';
import { PredictionsModule } from './predictions/predictions.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PerformancePageRoutingModule,
    CommunityModule,
    PredictionsModule
  ],
  declarations: [PerformancePage]
})
export class PerformancePageModule {}
