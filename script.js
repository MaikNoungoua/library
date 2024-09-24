
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
            readInput = "YES";

        }
        else{
            readInput = "NO";
            
        }
    var newBook = new Book(titleInput, authorInput,pageInput,readInput);
    bookList.push(newBook);// for the stats page
    const bookForm = document.getElementById("book-form");
    console.log(newBook);
    const table = document.getElementById("my-table");
    if (readInput == "YES"){
        let template = `
                        <tr class = "my-tr">
                            <td> <strong>${titleInput}</strong></td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td class = "status-read">${readInput}</td>
                            <td> TBC </td>
     `;
    table.innerHTML += template;

    }
    if (readInput == "NO"){
        let template = `
                        <tr class = "my-tr">
                            <td> <strong>${titleInput}</strong></td>
                            <td>${authorInput}</td>
                            <td>${pageInput}</td>
                            <td class = "status-non-read">${readInput}</td>
                            <td> TBC </td>
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
    
    const bubble_data = [
        {x:20, y:unreadBooks[0].pages, r:10},
        //{x:unreadBooks[1].title, y:unreadBooks[1].pages, r:10},
        //{x:unreadBooks[2].title, y:unreadBooks[2].pages, r:10},
    ]

    const bubble_data2 = [
        {x:30, y:readBooks[0].pages, r:12},
       // {x:readBooks[1].title, y:readBooks[1].pages, r:12},
       // {x:readBooks[2].title, y:readBooks[2].pages, r:12},
    ]

    /*CREATION OF CHART*/

    const  myChart = new Chart('bubblechart',{
        type: 'bubble',
        data:{
            datasets:[
                {
                    label: 'Unread',
                    data: bubble_data,
                    backgroundColor: 'rgb(255,99,132)',
                    pointStyle: 'rectRot',
                },
                {
                    label: 'Read',
                    data: bubble_data2,
                    backgroundColor: 'rgb(99,255,132)',
                },
            ]
        },
    });

    
    theCanvas = document.getElementById('chart-container');

    theCanvas.appenChild(myChart);
    
}



document.getElementById("adding").addEventListener("click", addingBook);
document.getElementById("stats").addEventListener("click", createStat);