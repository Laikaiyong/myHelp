import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPage } from './book.page';
import { BookDetailPage } from './bookdetail/bookdetail.page';
import { DeliveryDetailPage } from './delivery-details/delivery-details.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  {
    path:'bookdetail',
    component: BookDetailPage
  },
  {
    path:'deliverydetail',
    component: DeliveryDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookPageRoutingModule {}
