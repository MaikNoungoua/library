
let bookList = [];
function Book(title, author, pages, read){
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addingBook = function() {
    addingButton = document.getElementById("popup");
    addingButton.style.opacity = "100";

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
    bookList.push(newBook);
    const bookForm = document.getElementById("book-form");
    console.log(newBook);
    closingForm = document.getElementById('popup');
    closingForm.style.opacity = "0";
    
    const table = document.getElementById("my-table");
    let template = `
                        <tr>
                            <td>${titleInput}</td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td>${readInput}</td>
                            <td> TBC </td>
     `;
    table.innerHTML += template;

    

}


document.getElementById("adding").addEventListener("click", addingBook);