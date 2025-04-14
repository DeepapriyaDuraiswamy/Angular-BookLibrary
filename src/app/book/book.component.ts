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
  input : Book = new Book();

  showForm : boolean = false;

  showBooksBrowse : boolean = false;

  books : Book[] = [];

  constructor(private booksService: BooksService) {   

    
  }

  getBookByTitle(event : any) {

    console.log('Enter value is ' +event.target.value);
    this.input.title = event.target.value;
    this.input.categoryId = 0;
    this.input.publicationDate = new Date();
    this.input.copiesOwned = 0;

    this.booksService.getBookByTitle(this.input).subscribe((data) => this.books = data);
  }

  saveBook() {
    this.booksService.saveBook(this.book).subscribe(
      (data) => {
        console.log('Book saved successfully:', data);
        
        this.resetForm();
        this.showForm = false;
      },
      (error) => {
        console.error('Error saving book:', error);
      }
    );
  }
  

  displayBook (res : Book) {

    this.book = res;
  }

  resetForm() {
    this.book = new Book();
  }

  cancel() {
    
    this.resetForm();
    this.showForm = false;
  }

  

}
