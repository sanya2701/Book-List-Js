function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI(){}

UI.prototype.addBookToList=function(book){
  //console.log(book.title);
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class="delete">X</a></td>
  `
  const booklist = document.getElementById("book-list");
  booklist.appendChild(row);

 // e.preventDefault();
}

UI.prototype.addAlert=function(message,cls){
  //console.log(message,cls);

  const newDiv = document.createElement('div');
  newDiv.className = cls;
  newDiv.appendChild(document.createTextNode(message));
  //console.log(newDiv);

  const containr = document.querySelector(".container");
  const bookform = document.getElementById("book-form");
  containr.insertBefore(newDiv,bookform);

  setTimeout(function(){
  newDiv.style.display="none";
  },2000);
}

UI.prototype.clearFields = function(){
  const title=document.getElementById("title").value="";    
  const author=document.getElementById("author").value="";
  const isbn=document.getElementById("isbn").value="";
}

//Event Listener for submit
const submit = document.getElementById("book-form").addEventListener('submit',function(e){
    const title=document.getElementById("title").value;    
    const author=document.getElementById("author").value;
    const isbn=document.getElementById("isbn").value;
     
    //Instantiating book object
    const book = new Book(title,author,isbn);
    
    //Instantiating ui object
    const ui = new UI();

    //Check for null values
    if(!title || !author || !isbn)
    {
      ui.addAlert("Fill in all the fields!","error");
      e.preventDefault();
    }
    else
    {
    //Add book to list
    ui.addBookToList(book);
  
    ui.addAlert("Book Successfully Added","success");
    //Clear Fields
    ui.clearFields();
    e.preventDefault();
    }
});

const del = document.getElementById("book-list").addEventListener('click',function(e){
  //console.log(e.target);
  if(e.target.className == "delete"){
    if(confirm("Are u sure want to delete"))
    {
    e.target.parentElement.parentElement.remove();
    }
  }
  const ui = new UI();
  ui.addAlert("Book Removed Successfully","success")
})

























// let form =  document.getElementById("book-form");
// let booklist = document.getElementById("book-list"); 
// form.addEventListener('submit',table);

// function table(e){
//   let title =  document.getElementById("title").value;
//   let author =  document.getElementById("author").value;
//   let isbn =  document.getElementById("isbn").value;
//   if(!title || !author || !isbn){
//     console.log("No values entered!")
//   }   
//   else{
//     let row = document.createElement('tr');
//     booklist.appendChild(row);

//     let data = document.createElement('td');
//     data.appendChild(document.createTextNode(title));
//     booklist.appendChild(data);

//     data = document.createElement('td');
//     data.appendChild(document.createTextNode(author));
//     booklist.appendChild(data);

//     data = document.createElement('td');
//     data.appendChild(document.createTextNode(isbn));
//     booklist.appendChild(data);
//   }

//   e.preventDefault();
// }