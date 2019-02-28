import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor (
    private httpCliente: HttpClient
  ) { }

  getGoogleBooks(q: string) {
    return this.httpCliente.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
  }

}
