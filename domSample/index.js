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

let val=document.getElementsByName('text')[0]
let change=document.getElementById('values')
function message(){
    change.innerHTML=val.value
}
