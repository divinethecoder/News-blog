var ul = document.querySelectorAll('ul');
var messageBox = document.querySelector('input');
var Button = document.querySelectorAll('button');

Button[2].addEventListener('click',(event) =>{
    event.preventDefault();
    text = messageBox.value;
    var  li = document.createElement('li');
    ul[1].appendChild(li)
    li.textContent = text
    console.log(text)
})
