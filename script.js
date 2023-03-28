// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const itemCount = document.getElementById('item-count');

// Function to add a new todo item
function addTodo() {
  if (todoInput.value === '') return;

  const todoItem = document.createElement('li');
  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  const todoText = document.createElement('span');
  todoText.textContent = todoInput.value;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-button');
  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = '';
  updateItemCount();
}

// Function to remove a todo item
function removeTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
  updateItemCount();
}

// Function to update the item count
function updateItemCount() {
  const count = todoList.getElementsByTagName('li').length;
  itemCount.textContent = count + (count === 1 ? ' item' : ' items');
}

// Add event listeners
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) addButton.click();
});
todoList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    const todoText = event.target.nextElementSibling;
    todoText.classList.toggle('done');
  } else if (event.target.classList.contains('delete-button')) {
    removeTodo.call(event.target);
  }
});

// Initialize item count
updateItemCount();
