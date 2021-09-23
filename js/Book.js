import { saveToLocalStorage, getFromLocalStorage } from './storage.js';

export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    if (id !== undefined) {
      this.id = id;
    }
  }

  codeForBook() {
    return `
          <tr><td class='text-start bookInfo'><span class='bookTitle'>${this.title}</span> by <span class='bookAuthor'>${this.author}</span></td>
            <td><button type='button' data-id='${this.id}' class='removeBtn btn btn-warning'>Remove</button></td></tr>`;
  }

  static displayBooks(booksArr) {
    const arr = booksArr || Book.getAllBooks();
    document.querySelector('.booksContainer').innerHTML = arr.map((book) => new Book(book.title, book.author, book.id).codeForBook()).join('');
    const removeButtons = document.querySelectorAll('.removeBtn');
    for (let i = 0; i < removeButtons.length; i += 1) {
      removeButtons[i].addEventListener('click', (e) => {
        const idToDelete = e.target.getAttribute('data-id');
        Book.removeBook(idToDelete);
        Book.displayBooks();
      });
    }
  }

  static getAllBooks() {
    return getFromLocalStorage('allBooks') || [];
  }

  static addBook(book) {
    const booksArr = Book.getAllBooks();
    if (book.id === undefined) {
      const id = booksArr.length > 0 ? booksArr[booksArr.length - 1].id + 1 : 1;
      book.id = id;
    }
    booksArr.push(book);
    saveToLocalStorage('allBooks', booksArr);
  }

  static removeBook(id) {
    let booksArr = Book.getAllBooks();
    booksArr = booksArr.filter((book) => book.id !== Number(id));
    saveToLocalStorage('allBooks', booksArr);
  }
}