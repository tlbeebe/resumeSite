document.addEventListener("DOMContentLoaded", function() {

  //1. get our menu and todo element for use later in this script...

  let menu=document.querySelector('menu');
  let todos=document.querySelector('#todos');

  //2. set up  a "handler" to deal with "clicks"

  menu.addEventListener('click', function handler(event) {
	//remove 'active' from all items
    //add 'active' to the item that was selected (event.target)

    event.target.classList.toggle('active');
    let id=event.target.getAttribute('id');

    //JSON call to FETCH data json data from REST server...(it just works)
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          showToDoList(data);
        //anElement.innerHTML=data[0].title;
        });
    });

  //3. display the data into our todolist...
  function showToDoList(data) {
	//given the jsondata, add data to list, then
    //list='';
    //iterate the given jsondata (json array), and build your list...
    uno.innerHTML=data[1].title; //show the list on the page in the todos element

    dos.innerHTML=data[2].title;
    tres.innerHTML=data[3].title;
    quatro.innerHTML=data[4].title;
    cinco.innerHTML=data[5].title;
  }

});
