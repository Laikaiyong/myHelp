import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'learn',
        loadChildren: () => import('../learn/learn.module').then( m => m.LearnPageModule)
      },
      {
        path: 'apply',
        loadChildren: () => import('../apply/apply.module').then( m => m.ApplyPageModule)
      },
      {
        path: 'book',
        loadChildren: () => import('../book/book.module').then( m => m.BookModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('../jobs/jobs.module').then( m => m.JobsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'sponsor',
        loadChildren: () => import('../sponsor/sponsor.module').then( m => m.SponsorPageModule)
      },
      {
        path: 'performance',
        loadChildren: () => import('../performance/performance.module').then( m => m.PerformancePageModule)
      },
      {
        path: 'training',
        loadChildren: () => import('../home/training/training.module').then( m => m.TrainingPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}