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

const forms = document.querySelector('#forms');
const bookContainer = document.querySelector('#bookContainer');
const formsButton = document.querySelector('#formsButton');

function Book(name, pages, author, read) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.read = read;
};

forms.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookName = document.querySelector('#nameInput');
    let bookPages = document.querySelector('#pagesInput');
    let bookAuthor = document.querySelector('#authorInput');
    let bookRead = document.querySelector('#readInput');
    let newBook = new Book(bookName.value, bookPages.value, bookAuthor.value, bookRead.value);
    myLibrary.push(newBook);
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
    
} )

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