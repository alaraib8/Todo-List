console.log("To-Do List");
var input = document.getElementById('taskInput');
var addBtn = document.getElementById('addBtn');
var list = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  var text = input.value.trim();
  if (!text) return;

  var li = document.createElement('li');
  var span = document.createElement('span');
  span.textContent = text;

  var actions = document.createElement('div');
  actions.classList.add('actions');

  var editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = function () {
    editTask(li, span, actions);
  };

  var delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function () {
    li.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);
  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);

  input.value = '';
  input.focus();
}

function editTask(li, span, actions) {
  var inputEdit = document.createElement('input');
  inputEdit.type = 'text';
  inputEdit.value = span.textContent;

  var saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.onclick = function () {
    if (inputEdit.value.trim() !== '') {
      span.textContent = inputEdit.value.trim();
    }
    li.replaceChild(span, inputEdit);
    resetActions(li, span, actions);
  };

  li.replaceChild(inputEdit, span);
  actions.innerHTML = '';
  actions.appendChild(saveBtn);
  inputEdit.focus();
}

function resetActions(li, span, actions) {
  actions.innerHTML = '';

  var editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = function () {
    editTask(li, span, actions);
  };

  var delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function () {
    li.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);
}
