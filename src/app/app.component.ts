import {Component} from '@angular/core';
import {DataStore} from 'aws-amplify';
import {Book} from "../models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'amplify2';
  public books: Book[] = [];

  async ngOnInit() {
    this.books = await DataStore.query(Book);
  }
}
