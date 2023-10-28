import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplyPage } from './apply.page';

import { ApplyPageRoutingModule } from './apply-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ApplyPageRoutingModule
  ],
  declarations: [ApplyPage]
})
export class ApplyPageModule {}
