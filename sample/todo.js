var root = document.getElementById('root')

var todo = document.createElement('ol')

var form = document.createElement('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var task = document.querySelector('#task')
    if(!task.value)
    return 
    addTodo(task.value)
    saveTodo(task.value)
    task.value = ''
})

var input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','task')
input.setAttribute('id','task')

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','add')

form.appendChild(input)
form.appendChild(submit)

function addTodo(value){
    var element = document.createElement('li')
    element.textContent = value

    var remove = document.createElement('span')
    remove.textContent = 'Del'
    remove.style.color = 'red'
    remove.style.margin = '20px' 
    remove.style.cursor = 'pointer'

    remove.addEventListener('click',function(e){
       // e.target.parentElement.remove();
       removeTodo(value)
       this.parentElement.remove()
    });

    element.appendChild(remove)
    todo.appendChild(element)
}

root.appendChild(todo)
root.appendChild(form)

function saveTodo(value){
    // localStorage.setItem('todos',value)
    var todos = getTodos()
    todos.push(value)
    saveTodos(todos)
}

function getTodos(){
    var todoString = localStorage.getItem('todos')
    if (todoString === null ) {
        return[]
    }else
    {
        return JSON.parse(todoString)
    }
}


function saveTodos(todos){
     localStorage.setItem('todos',JSON.stringify(todos))
}

function removeTodo(todo){
    var todos = getTodos()
    newTodos = todos.filter(function(el){
        if(el !== todo){
            return true
        }else{
            return false
        }
    }) 
    saveTodos(newTodos)
}

function loadTodos(){
    var todos = getTodos()
    todos.forEach(function(todo) {
        addTodo(todo)
    })
}

loadTodos()