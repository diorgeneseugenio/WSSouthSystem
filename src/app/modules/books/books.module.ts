import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [BooksComponent, BookCardComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    BooksComponent
  ],
})
export class BooksModule { }
