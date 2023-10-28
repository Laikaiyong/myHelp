import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
        path: 'courses',
        loadComponent: () => import('./learn/courses/courses.page').then( m => m.CoursesPage)
      },
      {
        path: 'assessment',
        loadComponent: () => import('./learn/assessment/assessment.page').then( m => m.AssessmentPage)
      },
      {
        path: 'training',
        loadComponent: () => import('./training/training.page').then( m => m.TrainingPage)
      },
      {
        path: 'application',
        loadComponent: () => import('./training/application/application.page').then( m => m.ApplicationPage)
      },
      {
        path: 'trainingbrowse',
        loadComponent: () => import('./training/trainingbrowse/trainingbrowse.page').then( m => m.TrainingbrowsePage)
      },
      {
        path: 'scholarship',
        loadComponent: () => import('./apply/scholarship/scholarship.page').then( m => m.ScholarshipPage)
      },
      {
        path: 'grant',
        loadComponent: () => import('./apply/grant/grant.page').then( m => m.GrantPage)
      },
      {
        path: 'application',
        loadComponent: () => import('./apply/application/application.page').then( m => m.ApplicationPage)
      },
      {
        path: 'book',
        loadComponent: () => import('./book/book.page').then( m => m.BookPage)
      },
      {
        path: 'library',
        loadComponent: () => import('./book/library/library.page').then( m => m.LibraryPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./book/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'delivery',
        loadComponent: () => import('./book/delivery/delivery.page').then( m => m.DeliveryPage)
      },
      {
        path: 'listing',
        loadComponent: () => import('./jobs/listing/listing.page').then( m => m.ListingPage)
      },
      {
        path: 'companies',
        loadComponent: () => import('./jobs/companies/companies.page').then( m => m.CompaniesPage)
      },
      {
        path: 'application',
        loadComponent: () => import('./jobs/application/application.page').then( m => m.ApplicationPage)
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