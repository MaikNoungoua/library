
let bookPerGenre = {};
bookPerGenre["Fantasy"] = [0,0,0];//format: 'key', [pages read, pages unread, total pages]
bookPerGenre["Science Fiction"] = [0,0,0];
bookPerGenre["Distopian"] = [0,0,0];
bookPerGenre["Mystery"] = [0,0,0];
bookPerGenre["Horror"] = [0,0,0];
bookPerGenre["Romance"] = [0,0,0];
bookPerGenre["Historical-Fiction"] = [0,0,0];
bookPerGenre["History"] =  [0,0,0];

let bookPerGenre_entries = Object.entries(bookPerGenre);


let bookList = [];
let unreadBooks = [];
let readBooks = [];


function toggle() {
    let blur = document.getElementById('to-opace');
    blur.classList.toggle('active');

    let popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

function toggleStat(){
    let blur = document.getElementById('to-opace');
    blur.classList.toggle('active');

    let statDiv = document.getElementById("chart-container");
    statDiv.classList.toggle('active');
}


function Book(title, author, pages, genre,read){
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.genre = genre;
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
    let genreInput = document.getElementById("genre").value;
    
    let readInput = document.getElementById("read-before");
        if (readInput.checked){
            readInput = "YES";
        }
        else{
            readInput = "NO";  
        }

    let newBook = new Book(titleInput, authorInput,pageInput,genreInput,readInput);
    console.log(newBook.genreInput);
    

    switch (newBook['genre']){
        case "Fantasy":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[0][1][0] += Math.floor(parseFloat(newBook['pages']));//Math.floor(parseFloat(newBook['pages'])); to conver to an integer
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[0][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[0][1][2] = bookPerGenre_entries[0][1][0] + bookPerGenre_entries[0][1][1];

            break;

        case "Science Fiction":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[1][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[1][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[1][1][2] = bookPerGenre_entries[1][1][0] + bookPerGenre_entries[1][1][1];

            break;

        case "Distopian":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[2][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[2][1][1] += Math.floor(parseFloat(newBook['pages']));
            }

            bookPerGenre_entries[2][1][2] = bookPerGenre_entries[2][1][0] + bookPerGenre_entries[2][1][1];

            break;

        case "Mystery":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[3][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[3][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[3][1][2] = bookPerGenre_entries[3][1][0] + bookPerGenre_entries[3][1][1];

            break;

        case "Horror":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[4][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[4][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[4][1][2] = bookPerGenre_entries[4][1][0] + bookPerGenre_entries[4][1][1];

            break;

        case "Romance":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[5][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[5][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[5][1][2] = bookPerGenre_entries[5][1][0] + bookPerGenre_entries[5][1][1];

            break;

        case "Historical Fiction":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[6][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[6][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[6][1][2] = bookPerGenre_entries[6][1][0] + bookPerGenre_entries[6][1][1];

            break;
        
        case "History":
            if (newBook['read'] == "YES") {
                bookPerGenre_entries[7][1][0] += Math.floor(parseFloat(newBook['pages']));
            }
            else if (newBook['read'] == "NO"){
                bookPerGenre_entries[7][1][1] += Math.floor(parseFloat(newBook['pages']));
            }
            bookPerGenre_entries[7][1][2] = bookPerGenre_entries[7][1][0] + bookPerGenre_entries[7][1][1];

            break;

        

    }

    bookList.push(newBook);// for the stats page
    const bookForm = document.getElementById("book-form");
    console.log(newBook['genre']);
    console.log(newBook['read']);
    const table = document.getElementById("my-table");
    if (readInput == "YES"){
        let template = `
                        <tr class = "my-tr">
                            <td> <strong>${titleInput}</strong></td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td>${genreInput}</td>
                            <td class = "status-read">${readInput}</td>
     `;
    table.innerHTML += template;

    }
    if (readInput == "NO"){
        let template = `
                        <tr class = "my-tr">
                            <td> <strong>${titleInput}</strong></td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td>${genreInput}</td>
                            <td class = "status-non-read">${readInput}</td>
     `;
    table.innerHTML += template;

    }
    toggle();

   

}

createStat = function () {
    statePageGen = document.getElementById("chart-container");
    divToShade = document.querySelectorAll('div');
    statePageGen.style.opacity = "100";
    toggleStat();
    for(let i = 0; i < bookList.length; i++){
        if (bookList[i].read == "YES"){
            readBooks.push(bookList[i]);
        };
        if (bookList[i].read == "NO"){
            unreadBooks.push(bookList[i]);
        };
        };

    
    /*DATAS*/

    const data = {
        labels: ['Fantasy', 'Science Fiction', 'Distopian', 'Mystery', 'Horror', 'Romance', 'Historical Fiction', 'History'],
        datasets: [{
          label: 'Read Pages',
          data: [bookPerGenre_entries[0][1][0], bookPerGenre_entries[1][1][0], bookPerGenre_entries[2][1][0], 
            bookPerGenre_entries[3][1][0], bookPerGenre_entries[4][1][0], 
            bookPerGenre_entries[5][1][0], bookPerGenre_entries[6][1][0], bookPerGenre_entries[7][1][0]],
          backgroundColor: [
            'rgba(144, 238, 144)',         
         ],
          borderColor: [
            'rgba(144, 238, 144)',
          ],
          borderWidth: 1
        },{
            label: 'Unread Pages ',
            data: [bookPerGenre_entries[0][1][1], bookPerGenre_entries[1][1][0], bookPerGenre_entries[2][1][1], 
              bookPerGenre_entries[3][1][1], bookPerGenre_entries[4][1][1], 
              bookPerGenre_entries[5][1][1], bookPerGenre_entries[6][1][1], bookPerGenre_entries[7][1][1]],
            backgroundColor: [
              'rgba(255, 15, 0, 0.6)',
              
            ],
            borderColor: [
              'rgba(255, 15, 0, 0.6)',
            ],
            borderWidth: 1
          }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('barchart'),
        config
      );
  


    
    //theCanvas = document.getElementById('chart-container');

    //theCanvas.appenChild(myChart);
    
}



document.getElementById("adding").addEventListener("click", addingBook);
document.getElementById("stats").addEventListener("click", createStat);