var root = document.getElementById('root')

var todo = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var task = document.querySelector('#task')
    if (!task.value) return
    addTodo(task.value)
    task.value = ''
})

var input = document.createElement('input')
input.setAttribute('style','type:text')
input.setAttribute('placeholder','Task TODO')
input.setAttribute('id','task')

var submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('value','Add')

form.appendChild(input)
form.appendChild(submit)

function addTodo(value){
    var element = document.createElement('li')
    element.textContent = value

    var deleteItem = document.createElement('span')
    deleteItem.textContent = 'Del'
    deleteItem.style.color = 'red'
    deleteItem.style.margin = '10px'
    deleteItem.style.cursor = 'pointer'

    deleteItem.addEventListener('click',function(e){
        e.target.parentElement.remove()
    })

    element.appendChild(deleteItem)
    todo.appendChild(element)

}

root.appendChild(todo)
root.appendChild(form)