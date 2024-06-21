// let val=document.getElementById('head_val')
// val.innerHTML='hello I am just try to change the value by using get element by id!!!'
// val.style.color= 'red'
// val.style.background= 'green'

// let val=document.getElementsByClassName('head_val')

// val[0].innerHTML='I am just edited the document by using getelement by class'


// get element by tag example

// let val=document.getElementsByTagName('body')
// val[0].style.background='red'
// val[0].style.color='white'

// let val=document.getElementsByName('text')[0]
// let change=document.getElementById('values')
// function message(){
//     change.innerHTML=val.value
// }

// let c=document.createElement('h1')

// function create(){
//     c.innerHTML = 'hey how are you?';
//     document.body.appendChild(c)
// }

// function remove(){
//     c.remove()
// }

// let b=document.getElementById('btn');
// let h=document.getElementById('head_bottom');

// b.addEventListener('click',colorfn);

// function colorfn(){
//     h.style.color= 'red'
// }

// h.addEventListener('mouseover',Bg);
// function Bg(){
//     h.style.background='green'
// }



function change(){
    let val=document.getElementById('selectForm').value;
    alert('you selected '+ val)
}