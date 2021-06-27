var root = document.getElementById('root')

var todo = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit',function (e){
    e.preventDefault()
    var task = document.querySelector('#task')
    if (!task.value) return
    addTodo(task.value)
    task.value = ''
})
var input = document.createElement('input')
input.setAttribute('style','margin-left:20pox')
input.setAttribute('type','text')
input.setAttribute('id','task')
input.setAttribute('placeholder','Schreiben hier')
form.appendChild(input)

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','Pluse')
submit.setAttribute('style','border-radius:5px')

form.appendChild(submit)

function addTodo(value){
    var element = document.createElement('li')
    element.textContent = value
    var deleteElement = document.createElement('span')
    deleteElement.textContent = 'Löschen'
    deleteElement.style.color = 'red'
    deleteElement.style.margin = '10px'
    deleteElement.style.cursor = 'pointer'

    deleteElement.addEventListener('click',function (e){
        e.target.parentElement.remove()
    })
    element.appendChild(deleteElement)
    todo.appendChild(element)
}
root.appendChild(todo)
root.appendChild(form)