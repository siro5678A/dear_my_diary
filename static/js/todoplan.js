
const todoForm = document.querySelector('.todo-form');

const todoInput = document.querySelector('.todo-input');

const todoItemsList = document.querySelector('.todo-items');
// 저장할 투두 배열
let todolabel1 = [];


todoForm.addEventListener('submit', function(event) {

  event.preventDefault();
  addTodo(todoInput.value); 
});


function addTodo(item) {

  if (item !== '' ) {

    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    todolabel1.push(todo);
    addToLocalStorage(todolabel1); 
    todoInput.value = '';
  }
}


function rendertodolabel1(todolabel1) {

  todoItemsList.innerHTML = '';

  todolabel1.forEach(function(item) {

    const li = document.createElement('li');

    li.setAttribute('class', 'item');

    li.setAttribute('data-key', item.id);

li.innerHTML = `
      ${item.name}
      <button class="delete-button">X</button>
    `;

    todoItemsList.append(li);
  });
} //rendertodolabel1끝


function addToLocalStorage(todolabel1) {

  localStorage.setItem('todolabel1', JSON.stringify(todolabel1));

  rendertodolabel1(todolabel1);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todolabel1');

  if (reference) {

    todolabel1 = JSON.parse(reference);
    rendertodolabel1(todolabel1);
  }
}

function deleteTodo(id) {

  todolabel1 = todolabel1.filter(function(item) {

    return item.id != id;
  });

  addToLocalStorage(todolabel1);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', function(event) {

  if (event.target.classList.contains('delete-button')) {

    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});