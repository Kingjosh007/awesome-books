const formEl = document.forms['add-book'];
const titleInput = formEl.title;
const authorInput = formEl.author;
const booksContainer = document.querySelector('.booksContainer');

const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const codeForBook = (book) => `<div>${book.title}</div>
            <div>${book.author}</div>
            <button data-id='${book.id}' class='removeBtn'>Remove</button>
            <hr>`;

const deleteBook = (id) => {
  let booksArr = getFromLocalStorage('allBooks') || [];
  booksArr = booksArr.filter((book) => book.id !== id);
  saveToLocalStorage('allBooks', booksArr);
};

const removeBookListener = () => {
  const removeButtons = document.querySelectorAll('.removeBtn');
  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', (e) => {
      const idToDelete = e.target.getAttribute('data-id');
      deleteBook(idToDelete);
      // eslint-disable-next-line no-use-before-define
      displayBooks();
    });
  }
};

const displayBooks = (booksArr) => {
  const arr = booksArr || getFromLocalStorage('allBooks');
  booksContainer.innerHTML = arr.map((book) => codeForBook(book)).join('');
  removeBookListener();
};

displayBooks();

const saveBook = (book) => {
  const booksArr = getFromLocalStorage('allBooks') || [];
  let id = 0;
  if (booksArr.length > 0) {
    id = booksArr[booksArr.length - 1].id;
  }
  id += 1;
  book.id = id;
  booksArr.push(book);
  saveToLocalStorage('allBooks', booksArr);

  displayBooks(booksArr);
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  if (title.length > 0 || author.length > 0) {
    const book = { title, author };
    saveBook(book);
  }
});
