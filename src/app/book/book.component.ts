import { Component } from '@angular/core';
import { Book } from '../dto/book';
import { BooksService } from '../books.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book : Book = new Book();

  constructor(private booksService: BooksService) {

    

    
  }

  saveBook () {

    this.booksService.saveBook(this.book).subscribe(
      (data) => this.displayBook(data),
    (error) => {
      console.error('Error saving book:', error);
    });
  }

  displayBook (res : Book) {

    this.book = res;
  }

}
