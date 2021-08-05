import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Book {
  readonly id: string;
  readonly title?: string;
  readonly authorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}

export declare class Author {
  readonly id: string;
  readonly name?: string;
  readonly Books?: (Book | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Author, AuthorMetaData>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}