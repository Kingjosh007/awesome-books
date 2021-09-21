/* eslint-disable no-undef */

const formEl = document.forms['add-book'];
const titleInput = formEl.title;
const authorInput = formEl.author;

Book.displayBooks();

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    if (title.length > 0 || author.length > 0) {
        const book = new Book(title, author);
        Book.addBook(book);
        Book.displayBooks();
        titleInput.value = '';
        authorInput.value = '';
    }
});
