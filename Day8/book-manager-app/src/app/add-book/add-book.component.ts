import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  bookForm = new FormGroup({

    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    published_year: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required)

  });

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  save() {

    if(this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value as any).subscribe(() => {
        alert("Book Added");
        this.router.navigate(['/']);
      });

    }

  }

}
