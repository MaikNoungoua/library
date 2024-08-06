//fucntion to display the form to add a book

displayBook = function() {
    gridGeneration(ON);

}

 function Book(title, author, pages, genre, coverPage, read){
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.coverPage = coverPage;
    this.read = read;

}

submitBook = function(){
    /*This function describes what is goiing to happen when the submit button is pressed. 
             - all input from user to be stored in variables 
             - using object contructor to create a new book. 
    */
   
        
    let titleInput = document.getElementById("input1").value;
    let authorInput = document.getElementById("input2").value;
    let pageInput = document.getElementById("input3").value;
    let genreInput = document.getElementById("input4").value;
    let coverPageInput = document.getElementById("input5").value;
    let readInput = document.getElementById("input6").value;

    var newBook = new Book(titleInput, authorInput,pageInput,genreInput,coverPageInput,readInput);
    console.log(newBook);
    bookForm.style.display = "none";
    displayBook();

    }
    /*let titleInput = document.getElementById("input1").value;
    let authorInput = document.getElementById("input2").value;
    let pageInput = document.getElementById("input3").value;
    let genreInput = document.getElementById("input4").value;
    let coverPageInput = document.getElementById("input5").value;
    let readInput = document.getElementById("input6").value;

    var newBook = new Book(titleInput, authorInput,pageInput,genreInput,coverPageInput,readInput);
    console.log(newBook); */

    /*console.log(titleInput);
    console.log(authorInput);
    console.log(pageInput);
    console.log(genreInput);
    console.log(coverPageInput);
    console.log(readInput); */


addingBook = function() {


    const mainContainer = document.getElementById("main-container"); //grid container element and book form container
    const bookForm = document.createElement("div");
    bookForm.setAttribute("id","book-form");
    mainContainer.appendChild(bookForm);

    for (let i = 0; i < 7; i++){
        
        
        for (let j = 0; j < 3; j++){
            const bookFormDiv = document.createElement("div");
            bookFormDiv.className = "book-form-divs";
            bookForm.appendChild(bookFormDiv);
        };

    }

    let increment1 = 1;
    let increment2 = 2;
    for (let i = 0; i < 6; i++){
        
        const inputField = document.createElement("INPUT");
        inputField.setAttribute("type","text","class","to-input");
        inputField.style.gridArea = `${increment1}/2/${increment2}/3`;
        inputField.setAttribute("id",`input${increment1}`)
        bookForm.appendChild(inputField);
        increment1++;
        increment2++;
    }

   
   //for title: 
    const textTitle = document.createElement("p");
    textTitle.innerText = "Title: ";
    textTitle.setAttribute("class","text-form","id","title");
    textTitle.style.gridArea ='1/1/2/2';
    bookForm.appendChild(textTitle);
    
    
    //for author
    const authorTitle = document.createElement("p");
    authorTitle.innerText = "Author: ";
    authorTitle.setAttribute("class","text-form");
    authorTitle.style.gridArea =' 2/1/2/3';
    bookForm.appendChild(authorTitle);
    

    
    //for pages
    const pagesTitle = document.createElement("p");
    pagesTitle.innerText = "Pages: ";
    pagesTitle.setAttribute("class","text-form");
    pagesTitle.style.gridArea ='3/1/4/2';
    bookForm.appendChild(pagesTitle);

    //for genre
    const genreTitle = document.createElement("p");
    genreTitle.innerText = "Genre: ";
    genreTitle.setAttribute("class","text-form");
    genreTitle.style.gridArea ='4/1/5/2';
    bookForm.appendChild(genreTitle);

    //for cover page
    const coverPageTitle = document.createElement("p");
    coverPageTitle.innerText = "Cover Page: "
    coverPageTitle.setAttribute("class","text-form");
    coverPageTitle.style.gridArea ='5/1/6/2';
    bookForm.appendChild(coverPageTitle);

     //for read
     const readTitle = document.createElement("p");
     readTitle.innerText = "Have you read it? ";
     readTitle.setAttribute("class","text-form");
     readTitle.style.gridArea ='6/1/7/2';
     bookForm.appendChild(readTitle);


     //for submit
     const submitButton = document.createElement("button"); 
     submitButton.textContent = "SUBMIT";
     submitButton.setAttribute("id","submit");
     bookForm.appendChild(submitButton);
     submitButton.style.gridArea ='7/2/11/3';
     submitButton.addEventListener('click', submitBook);
}



gridGeneration = function (value){

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
    if (value == "ON"){
        bookContainer.style.display = "none";
    }
    else {
        pass; 
    };
    
    addingBook();
    
   /*mainContainer.style.display = "none";
    alert("the none display is working")
    mainContainer.style.display = "grid";
    alert("the grid display is working");*/ //This just show that I can play with the display value. 
    //the goal is I can generate grid  and hide them. Now we should in the end call a function that will triggerd the appearance the adding book form

 
};

//event listener for add book button. 
//document.getElementById("add-book").addEventListener("click", gridGeneration); // here we change the first function that is being generated. 
document.getElementById("add-book").addEventListener("click", addingBook);
