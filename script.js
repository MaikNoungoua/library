
let bookList = [];
function toggle() {
    let blur = document.getElementById('to-opace');
    blur.classList.toggle('active')

    let popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

function Book(title, author, pages, read){
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addingBook = function() {
    addingButton = document.getElementById("popup");
    divToShade = document.querySelectorAll('div');
    addingButton.style.opacity = "100";
    toggle();
}

displayBook = function(args){
    bookList.push(args);
    console.log(bookList);

}

submitBook = function(){

    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pageInput = document.getElementById("pages").value;
    
    let readInput = document.getElementById("read-before");
        if (readInput.checked){
            readInput = "true";

        }
        else{
            readInput = "false";
            
        }
    var newBook = new Book(titleInput, authorInput,pageInput,readInput);
    bookList.push(newBook);// for the stats page
    const bookForm = document.getElementById("book-form");
    console.log(newBook);
    const table = document.getElementById("my-table");
    let template = `
                        <tr class = "my-tr">
                            <td> <strong>${titleInput}</strong></td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td class = "status">${readInput}</td>
                            <td> TBC </td>
     `;
    table.innerHTML += template;
    toggle();

    

}


document.getElementById("adding").addEventListener("click", addingBook);