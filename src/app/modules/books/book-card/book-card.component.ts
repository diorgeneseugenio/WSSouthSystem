import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: any;

  @Output() hello = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.hello.emit( this.book.volumeInfo.title );
  }
}
