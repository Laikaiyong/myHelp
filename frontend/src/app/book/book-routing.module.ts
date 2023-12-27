import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  // {
  //   path:'scholarshipdetails',
  //   component: ScholarshipDetailsComponent
  // },
  // {
  //   path:'grantdetails',
  //   component: GrantDetailsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookPageRoutingModule {}
