const submitButton = document.querySelectorAll("input")[2]
const textField = document.getElementById("new-task-description")
const task = document.getElementById("tasks")
const dueDateField = document.getElementById("due-date")


document.addEventListener("DOMContentLoaded", () => {
  
  submitButton.addEventListener("click", function(event) {

    event.preventDefault()

    function createLi() { 
    const li = document.createElement("li")
    li.innerHTML = `${textField.value}<br>
    ${dueDateField.value}<br>
    <button class="delete-button" type="delete" value='delete'>x</button>
    `
    return li
    }

    const selectedLi = createLi()
    task.append(selectedLi)
    const deleteButton = selectedLi.getElementsByClassName("delete-button")[0]
    deleteButton.addEventListener("click", function(event) {
       selectedLi.remove()
    })
  })
  

});


