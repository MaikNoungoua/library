//fucntion to display the form to add a book

addingBook = function() {
    const mainContainer = document.getElementById("main-container"); //grid container element and book form container
    const bookForm = document.createElement("div");
    bookForm.setAttribute("id","book-form");
    mainContainer.appendChild(bookForm);

    /*for (let i = 0; i < 7; i++){
        const bookFormDiv = document.createElement("div");
        bookFormDiv.className = "book-form-divs";
        bookForm.appendChild(bookFormDiv);
        for (let j = 0; j < 4; j++){
            const gridItem = document.createElement("div");
            gridItem.className = "book-form-elements";
            bookFormDiv.appendChild(gridItem);
        };*/

    }


    //for title: 
    const textTitle = document.createElement("p");
    textTitle.innerText = "Title: ";
    textTitle.setAttribute("class","form-text") 
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class","division-book-form");
    bookForm.appendChild(titleDiv);
    const title = document.createElement("INPUT");
    title.setAttribute("type","text","class","to-input");
    titleDiv.appendChild(textTitle);
    titleDiv.appendChild(title);
    
    //for author
    const authorTitle = document.createElement("p");
    authorTitle.innerText = "Author: ";
    authorTitle.setAttribute("class","form-text") 
    const authorDiv = document.createElement("div");
    authorDiv.setAttribute("class","division-book-form");
    bookForm.appendChild(authorDiv);
    const author = document.createElement("INPUT");
    author.setAttribute("type","text","class","to-input");
    authorDiv.appendChild(authorTitle);
    authorDiv.appendChild(author);
    
    //for pages
    const pagesTitle = document.createElement("p");
    pagesTitle.innerText = "Pages: ";
    pagesTitle.setAttribute("class","form-text");
    const pagesDiv = document.createElement("div");
    pagesDiv.setAttribute("class","division-book-form");
    bookForm.appendChild(pagesDiv);
    const pages = document.createElement("INPUT");
    pages.setAttribute("type","text","class","to-input");
    pagesDiv.appendChild(pagesTitle);
    pagesDiv.appendChild(pages);


    //for genre
    const genreTitle = document.createElement("p");
    genreTitle.innerText = "Genre: ";
    genreTitle.setAttribute("class","form-text");
    const genreDiv = document.createElement("div");
    genreDiv.setAttribute("class","division-book-form");
    bookForm.appendChild(genreDiv);
    const genre = document.createElement("INPUT");
    genre.setAttribute("type","text","class","to-input");
    genreDiv.appendChild(genreTitle);
    genreDiv.appendChild(genre);

    //for cover page
    const coverPageTitle = document.createElement("p");
    coverPageTitle.innerText = "Cover Page: "
    coverPageTitle.setAttribute("class","form-text");
    const coverPageDiv = document.createElement("div");
    coverPageDiv.setAttribute("class","division-book-form");
    bookForm.appendChild(coverPageDiv);
    const coverPage = document.createElement("INPUT");
    coverPage.setAttribute("type","text","class","to-input");
    coverPageDiv.appendChild(coverPageTitle);
    coverPageDiv.appendChild(coverPage);

     //for read
     const readTitle = document.createElement("p");
     readTitle.innerText = "Have you read it? ";
     readTitle.setAttribute("class","form-text");
     const readDiv = document.createElement("div");
     readDiv.setAttribute("class","division-book-form");
     bookForm.appendChild(readDiv);
     const read = document.createElement("INPUT");
     read.setAttribute("type","text","class","to-input");
     readDiv.appendChild(readTitle);
     readDiv.appendChild(read);






//const gridContainer = document.getElementById("main-container");

gridGeneration = function (){

    //defining the grid size 
    const rows = 4; 
    const columns = 4; 

    //this function will create the div for grid (12x12) and have the display on the div set to none

    const mainContainer = document.getElementById("main-container"); //grid container element and book form container
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("id","book-container");
    mainContainer.appendChild(bookContainer) 
    
    //creating grid dynamically 
     for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            //create grid element 
            const gridItem = document.createElement('div');
            gridItem.className = "book-slots"
            gridItem.textContent = `Cell ${i + 1}-${j + 1}`;


            // Append the grid item to the grid container
             bookContainer.appendChild(gridItem);

            }


    
    //Right after that it need to make the formulaire for book appear. 
        
    }
    bookContainer.style.display = " none";
    addingBook();
    
   /*mainContainer.style.display = "none";
    alert("the none display is working")
    mainContainer.style.display = "grid";
    alert("the grid display is working");*/ //This just show that I can play with the display value. 
    //the goal is I can generate grid  and hide them. Now we should in the end call a function that will triggerd the appearance the adding book form

 
};

//event listener for add book button. 
document.getElementById("add-book").addEventListener("click", gridGeneration);
