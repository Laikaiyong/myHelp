import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPage } from './jobs.page';
import { ListDetailPage } from './jobdetail/listdetail.page';
import { CompanyDetailPage } from './companydetail/companydetail.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: JobsPage
  },
  {
    path: 'jobdetail',
    component: ListDetailPage
  },
  {
    path: 'companydetail',
    component: CompanyDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsPageRoutingModule {}
