import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyPage } from './apply.page';
import { ScholarshipDetailsComponent } from './scholarship-details/scholarship-details.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPage
  },
  {
    path:'scholarshipdetails',
    component: ScholarshipDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyPageRoutingModule {}
