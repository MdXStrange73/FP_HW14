// Функция для добавления элемента в список дел
function addMessageToList() {
    var msgInput = document.getElementById('msgInput');
    var message = msgInput.value.trim();
  
    if (message !== '') {
      var listItem = createTodoItem(message);
      document.getElementById('todoList').appendChild(listItem);
      msgInput.value = '';
    }
  }
  
  // Функция для создания элемента списка дел
  function createTodoItem(message) {
    var listItem = document.createElement('li');
  
    // Создаем обертку для текста
    var textWrapper = document.createElement('span');
    textWrapper.innerText = message;
  
    listItem.appendChild(textWrapper);
  
    // Добавляем кнопку удаления к элементу
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    listItem.appendChild(deleteButton);
  
    return listItem;
  }
  
  // Функция для удаления элемента из списка дел
  function deleteMessage(event) {
    var target = event.target;
    if (target.nodeName === 'BUTTON') {
      target.parentElement.remove();
    }
  }
  
  // Функция для обработки клика на элементе списка дел
  function toggleGreenColor(event) {
    var target = event.target;
    if (target.nodeName === 'SPAN') {
      target.parentElement.classList.toggle('green');
    }
  }
  
  // Обработчик события на кнопке "Добавить"
  document.getElementById('msgButton').addEventListener('click', addMessageToList);
  
  // Обработчик события для удаления элемента при клике на кнопке "Удалить" через делегирование
  document.getElementById('todoList').addEventListener('click', function(event) {
    deleteMessage(event);
  });
  
  // Обработчик события для окрашивания текста в зеленый при клике на элементе через делегирование
  document.getElementById('todoList').addEventListener('click', function(event) {
    toggleGreenColor(event);
  });