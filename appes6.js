class Book{
   constructor(title,author,isbn)
   {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
   }
}

class UI{ 
  addBookToList(book){
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a class="delete">X</a></td>
    `
    const booklist = document.getElementById("book-list");
    booklist.appendChild(row);
  
  }

  addAlert(message,cls){
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

  clearFields(){
    const title=document.getElementById("title").value="";    
    const author=document.getElementById("author").value="";
    const isbn=document.getElementById("isbn").value="";
  }

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
