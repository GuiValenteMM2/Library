let myLibrary = [
    {
        "name": "chama",
        "pages": 69,
        "author": "poatan",
        "read": "y",
    },
    {
        "name": "smesh",
        "pages": 20,
        "author": "chimaev",
        "read":"n"
    }
];

const forms = document.querySelector('form');
const bookContainer = document.querySelector('#bookContainer');
const formsButton = document.querySelector('#formsButton');

function Book(name, pages, author, read) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.read = read;
};

function addBook() {
    let bookName = forms.elements["name"];
    let bookPages = forms.elements["pages"];
    let bookAuthor = forms.elements["author"];
    let bookRead = forms.elements["read"];
    let newBook = new Book(bookName, bookPages, bookAuthor, bookRead);
    myLibrary.push(newBook);
};

formsButton.addEventListener('click', () => forms.style.cssText = "display: block");

myLibrary.forEach(newBook => {
    const cardDiv = document.createElement('div');
    const namePara = document.createElement('p');
    namePara.textContent = newBook["name"];
    cardDiv.appendChild(namePara);
    const pagesPara = document.createElement('p');
    pagesPara.textContent = newBook["pages"];
    cardDiv.appendChild(pagesPara);
    const authorPara = document.createElement('p');
    authorPara.textContent = newBook["author"];
    cardDiv.appendChild(authorPara);
    const readPara = document.createElement('p');
    readPara.textContent = newBook["read"];
    cardDiv.appendChild(readPara);
    bookContainer.appendChild(cardDiv);
})

