//select elements for DOM manipulation
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");


//adding event listeners
input.addEventListener("keypress", function(keyPressed){
  if(keyPressed.which === 13){
    var li = document.createElement('li');
    var spanElement = document.createElement('span');
    var icon = document.createElement('i');

    var newTodo = this.value;
    this.value = " ";

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, newTodo);

    deleteTodo();
  }
});

//deleting todo if delete span is clicked
function deleteTodo(){
  for(let span of spans){
    span.addEventListener('click', function(){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//event listener for linethrough when clicked
ul.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
  }
}, false
);

//event listener for save/clear buttons
saveBtn.addEventListener('click', function(){
  localStorage.setItem('todoList', ul.innerHTML);
});

clearBtn.addEventListener('click', function(){
  ul.innerHTML = "";
  localStorage.removeItem('todoList', ul.innerHTML);
});

//load todos saved in localStorage
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

loadTodo();
