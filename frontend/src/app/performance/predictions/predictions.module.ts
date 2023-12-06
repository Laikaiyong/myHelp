import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsComponent } from './predictions.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  exports: [PredictionsComponent],
  declarations: [PredictionsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HighchartsChartModule
  ]
})
export class PredictionsModule { }
