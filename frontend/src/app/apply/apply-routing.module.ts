import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyPage } from './apply.page';
import { ScholarshipDetailsComponent } from './scholarship-details/scholarship-details.page';
import { GrantDetailsComponent } from './grant-details/grant-details.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPage
  },
  {
    path:'scholarshipdetails',
    component: ScholarshipDetailsComponent
  },
  {
    path:'grantdetails',
    component: GrantDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyPageRoutingModule {}
