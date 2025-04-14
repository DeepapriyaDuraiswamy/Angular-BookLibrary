import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './dto/book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

    constructor(private http: HttpClient) { }
  
    apiUrl : string = 'http://localhost:8080/api';
     
    getBookByTitle(book:Book) : Observable<Book[]> {
      return this.http.post<Book[]>(`${this.apiUrl}/books`, book);
    }
  
      
    saveBook(book:Book): Observable<Book> {
      
      return this.http.post<Book>(`${this.apiUrl}/saveBook`, book);
    }
    
}
