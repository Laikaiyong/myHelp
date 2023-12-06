import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnPage } from './learn.page';
import { CoursePage } from './course/course.page';
import { AssDetailPage } from './assdetail/assdetail.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'course',
    component: CoursePage
  },
  // {
  //   path: 'course/:id',
  //   component: CoursePage
  // },
  // {
  //   path: 'assessment/:id',
  //   component: AssDetailPage
  // }
  {
    path: 'assessment',
    component: AssDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPageRoutingModule {}
