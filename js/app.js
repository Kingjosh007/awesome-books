import Book from './Book.js';

const linkSectionMatch = {
  listLink: 'booksList',
  addLink: 'addBook',
  contactLink: 'contact',
};

const allLinks = Object.keys(linkSectionMatch);
const allSections = Object.values(linkSectionMatch);

allLinks.forEach((l) => {
  document.querySelector(`#${l}`).addEventListener('click', () => {
    allLinks.forEach((ll) => document.querySelector(`#${ll}`).classList.remove('onit'));
    allSections.forEach((s) => {
      document.querySelector(`#${s}`).classList.remove('show');
      document.querySelector(`#${s}`).classList.add('hide');
    });
    document.querySelector(`#${linkSectionMatch[l]}`).classList.replace('hide', 'show');
    document.querySelector(`#${l}`).classList.add('onit');
    document.querySelector('.navbar-toggler').click();
  });
});

document.querySelector('.navbar-brand').addEventListener('click', () => {
  allSections.forEach((s) => {
    document.querySelector(`#${s}`).classList.remove('show');
    document.querySelector(`#${s}`).classList.add('hide');
  });
  allLinks.forEach((ll) => document.querySelector(`#${ll}`).classList.remove('onit'));
  document.querySelector(`#${linkSectionMatch[allLinks[0]]}`).classList.replace('hide', 'show');
  document.querySelector(`#${allLinks[0]}`).classList.add('onit');
});


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
