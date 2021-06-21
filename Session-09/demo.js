var root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var task = document.querySelector('#task')
    if(!task.value) return
    addTodo(task.value)
    task.value = ''
})

var input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('placeholder','write here...')
input.setAttribute('id','task')

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','Add')

form.appendChild(input)
form.appendChild(submit)

root.appendChild(todoList)
root.appendChild(form)

function addTodo(value){
    var toDo = document.createElement('li')
    toDo.textContent = value

    var delet = document.createElement('span')
    delet.textContent = 'x'
    delet.style.margin = '10px'
    delet.style.cursor = 'pointer'
    delet.style.color = 'red'

    delet.addEventListener('click',function(e){
        e.target.parentElement.remove()
    })

    toDo.appendChild(delet)
    todoList.appendChild(toDo)
    
}

