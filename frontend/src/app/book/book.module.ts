import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookPage } from './book.page';

import { BookPageRoutingModule } from './book-routing.module';
import { LibraryModule } from './library/library.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookPageRoutingModule,
    LibraryModule
  ],
  declarations: [BookPage]
})
export class BookModule {}
