import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
   id = '';

  bookForm = new FormGroup({

    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    published_year: new FormControl<number | null>(null, Validators.required),
    genre: new FormControl('', Validators.required)

  });

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router

  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data => {
      this.bookForm.patchValue(data);
    });

  }

  update() {
    if(this.bookForm.valid) {
      this.bookService.updateBook(this.id, this.bookForm.value as any).subscribe(() => {
        alert("Book Updated");
        this.router.navigate(['/']);
      });

    }

  }

}
