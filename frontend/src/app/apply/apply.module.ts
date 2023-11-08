import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplyPage } from './apply.page';

import { ApplyPageRoutingModule } from './apply-routing.module';
import { GrantModule } from './grant/grant.module';
import { ScholarshipModule } from './scholarship/scholarship.module';
import { ApplicationModule } from './application/application.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ApplyPageRoutingModule,
    GrantModule,
    ApplicationModule,
    ScholarshipModule
  ],
  declarations: [ApplyPage]
})
export class ApplyPageModule {}
