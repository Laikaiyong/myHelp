import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorPage } from './sponsor.page';
import { InitiativePage } from './initiative/initiative.page';
import { SponsoringPage } from './sponsoring/sponsoring.page';
import { LeaderboardPage } from './leaderboard/leaderboard.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: SponsorPage
  },
  {
    path: 'initiative',
    component: InitiativePage
  },
  {
    path: 'sponsoring',
    component: SponsoringPage
  },
  {
    path: 'leaderboard',
    component: LeaderboardPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorPageRoutingModule {}
