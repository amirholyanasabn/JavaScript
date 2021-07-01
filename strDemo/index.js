document.getElementById('btn-change').onclick = function(){
    document.getElementById('first-div').innerHTML = '<p>Welcome to JavaScript</p>';
}

document.getElementById('btn-change-react').onclick = function(){
    document.getElementById('second-div').innerHTML = '<ol><li>react js</li><li>react native</li></ol>';
}
document.getElementById('btn-third').onclick = function(){
    document.getElementById('third-div').style.backgroundColor = 'blue';
    document.getElementById('second-div').style.backgroundColor = 'yellow';
    document.getElementById('first-div').style.backgroundColor = 'green';
}

document.getElementById('btn-random').onclick = function(){
    var firstColor = Math.floor(Math.random()*256);
    var secondColor = Math.floor(Math.random()*256);
    var thirdColor = Math.floor(Math.random()*256);
    document.getElementById('')
}