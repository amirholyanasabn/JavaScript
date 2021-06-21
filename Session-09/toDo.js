root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')
// form.setAttribute('method','GET')
form.addEventListener('submit',function(event){
    event.preventDefault()
    var task = document.querySelector('#task')
    if (!task.value) return
    addToDo(task.value)
    // input.value = ' '
    task.value = ''
})

var input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','Task TODO')
input.setAttribute('id','task')

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','send')

form.appendChild(input)
form.appendChild(submit)

root.appendChild(todoList)
root.appendChild(form)

function addToDo(value){
    var todo = document.createElement('li')
    todo.textContent = value

    var deletIcon = document.createElement('span')
    deletIcon.textContent = 'X'
    deletIcon.style.color = 'red'
    deletIcon.style.cursor = 'pointer'
    deletIcon.style.margin = '10px'

    deletIcon.addEventListener('click',function(e){
        e.target.parentElement.remove()
    })
    
    todo.appendChild(deletIcon)
    todoList.appendChild(todo)
   
}