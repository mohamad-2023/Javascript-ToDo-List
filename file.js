//query selector
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoResult = document.querySelector(".todo-result")

function addTodo(e){
    e.preventDefault();
    
    //add todo-item div
    const todoDiv = document.createElement("div")
    todoDiv.classliList.add('todo-item')
    
    //add h3 , data:h3
    const newTodo = document.createElement('h3')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-title')

    //create button div
    const buttonDiv = document.createElement('div')
    todoDiv.appendChild(buttonDiv)

    //add complete , delete button
    const completeBtn =  document.createElement('button')
    completebtn.innerText ='<i class="fa-solid fa-check todo-check todo-icon"></i>'
    buttonDiv.appendChild(completeBtn)

    const removeBtn =  document.createElement('button')
    completebtn.innerText ='<i class="fa-sharp fa-solid fa-trash todo-delet todo-icon"></i>'
    buttonDiv.appendChild(removeBtn)

    todoResult.appendChild(todoDiv)
}

todoBtn.addEventListener('click',addtodo)