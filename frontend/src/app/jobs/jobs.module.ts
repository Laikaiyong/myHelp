import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';

import { JobsPageRoutingModule } from './jobs-routing.module';
import { ListingsModule } from './listings/listings.module';
import { CompaniesModule } from './companies/companies.module';
import { ApplicationModule } from './application/application.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    JobsPageRoutingModule,
    ListingsModule,
    CompaniesModule,
    ApplicationModule
  ],
  declarations: [JobsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JobsPageModule {}
