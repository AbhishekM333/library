
function Book(title, author, pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read=read;
}

Book.prototype.toggleRead=function(){
    this.read=!this.read
}

function toggleRead(index){
    myLibrary[index].toggleRead()
    displayBooks()
}

const myLibrary = [];


function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

document.getElementById('book').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read=document.getElementById('read').checked;

    const newBook = new Book(title, author, pages,read);
    addBookToLibrary(newBook);

    document.getElementById('book').reset(); 
});

function displayBooks() {
    const bookList = document.getElementById('booklist');
    bookList.innerHTML = '';  

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <h3>Book Name:${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read status: ${book.read ? 'read':'not read'}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button class="toggle" onclick="toggleRead(${index})">Toggle read</button>
        `;
    
        bookList.appendChild(bookCard); 
    });
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}