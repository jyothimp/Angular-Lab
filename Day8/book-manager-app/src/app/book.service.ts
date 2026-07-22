import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   url = 'https://worksheet-library.mashupstack.com/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  updateBook(id: string, book: Book) {
    return this.http.put(`${this.url}/${id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
