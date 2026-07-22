import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });

  }

  delete(id: string) {
    if(confirm("Delete this book?")) {
      this.bookService.deleteBook(id).subscribe(() => {
      alert("Book Deleted");
        this.loadBooks();
      });

    }

  }

}
