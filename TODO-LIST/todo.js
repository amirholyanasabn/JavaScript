var root = document.getElementById('root')

var todo = document.createElement('ol')

var form = document.createElement('form')
form.addEventListener('submit',function (e){
    e.preventDefault()
    var task = document.querySelector('#task')
    if(!task.value) return
    addTodo(task.value)
    task.value = ''
})
var input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','task')
input.setAttribute('style','margin:20px;border-radius:5px')
form.appendChild(input)

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','Add')
submit.setAttribute('style','margin:20px')
form.appendChild(submit)

function addTodo(value){
    var element = document.createElement('li')
    element.textContent = value
    var deleteSpan = document.createElement('span')
    deleteSpan.style.color = 'red'
    deleteSpan.style.cursor = 'pointer'
    deleteSpan.style.margin = '10px'
    deleteSpan.textContent = 'X'

    deleteSpan.addEventListener('click',function (e){
        e.target.parentElement.remove()
    })
    todo.appendChild(element)
    element.appendChild(deleteSpan)
}
root.appendChild(todo)
root.appendChild(form)