import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

import { of, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

/*
  Regras de negócio;
  Chamadas de serviços.
*/

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksList$: Observable<any[]>;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksList$ = this.booksService.getGoogleBooks('javascript')
      .pipe(
        mergeMap( (response: any) => {
          return of(response.items);
        })
      );
  }

  onHello(title: string) {
    alert(title);
  }

}
