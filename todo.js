let userInput = document.getElementById('user-input')
let submitButton = document.getElementById('submit-button')
let pendingTasksList = document.getElementById('pending-tasks')
let completedTasksList = document.getElementById('completed-tasks')
let taskItems = ''

function checkedBox(whichList) {
  if (whichList.parentElement == pendingTasksList) {
    completedTasksList.appendChild(whichList)
  } else {
    pendingTasksList.appendChild(whichList)
  }}

function deleteButton(listItem) {
 parentList = listItem.parentElement
 parentList.removeChild(listItem)
}

submitButton.addEventListener('click', function() {

  task = userInput.value
  taskItem = `
  <li class = "task-item">
    <input type="checkbox" onchange = "checkedBox(this.parentElement)" />
    <label>${task}</label>
    <button class = "button" onclick = "deleteButton(this.parentElement)">Delete</button>
  </li>`

  pendingTasksList.insertAdjacentHTML('beforeend', taskItem)
})
