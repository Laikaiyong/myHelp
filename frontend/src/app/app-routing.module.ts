import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/config/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full',
      },
      {
        path: 'folder/:id',
        loadComponent: () =>
          import('./folder/folder.page').then((m) => m.FolderPage),
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
      },
      {
        path: 'signup',
        loadComponent: () => import('./auth/signup/signup.page').then( m => m.SignupPage)
      },
      {
        path: 'course',
        loadComponent: () => import('./learn/course/course.page').then( m => m.CoursePage)
      },
      {
        path: 'book',
        loadComponent: () => import('./book/book.page').then( m => m.BookPage)
      },
      {
        path: 'faq',
        loadComponent: () => import('./faq/faq.page').then( m => m.FaqPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
      },
      {
        path: 'splash',
        loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
