import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyPage } from './apply.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyPageRoutingModule {}
