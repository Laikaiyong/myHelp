import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SponsorPage } from './sponsor.page';

import { SponsorPageRoutingModule } from './sponsor-routing.module';
import { PackagesModule } from './packages/packages.module';
import { InitiativesModule } from './initiatives/initiatives.module';
import { SponsoredModule } from './sponsored/sponsored.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SponsorPageRoutingModule,
    PackagesModule,
    InitiativesModule,
    SponsoredModule
  ],
  declarations: [SponsorPage]
})
export class SponsorPageModule {}
