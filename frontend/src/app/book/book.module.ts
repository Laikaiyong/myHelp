import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookPage } from './book.page';

import { BookPageRoutingModule } from './book-routing.module';
import { LibraryModule } from './library/library.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookPageRoutingModule,
    LibraryModule,
    DeliveryModule,
    CartModule
  ],
  declarations: [BookPage]
})
export class BookModule {}
