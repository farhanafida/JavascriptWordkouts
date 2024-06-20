// console.log('hello world')
// let v=23
// console.log(v)
// console.log('Age of you is :'+ v )

// let value='hey 123 ashkar'
// y=parseInt(value)
// console.log(y)

// function greet(){
// return 'hey';
// }
// greet()

// num1=10;
// num2=12;
// let value = prompt ('Enter a value');
// console.log(value)
// if(value>num2){
//     console.log(num1+ ' is greater than '+num2)
// }else{
//     console.log(num2+' is greater than '+num1)
// }

// function Hey(val){
//     console.log('hello '+val)
// }
// val=[1,3,2,4,5]
// len=val.length
// for (i=0;i<len;i++){
//     Hey(val[i])
// }


// obj={
//     name:'ashkar',
//     age:23,
//     place:'purakkad',
//     address:{
//         house:'madathil',
//         post:'purakkad',
//         zip:673522
//     }
// }

// for (let key in obj){
//     console.log(key,':',obj[key])
//     if (key=='address'){
//         for (let add in obj[key])
//             console.log(add,obj[key].address)
//     }
// }

// let add=function(num1,num2){
//     return num1+num2
// }
// let value=add
// console.log(typeof value)


// values=[1,2,3,4,5,6,7,8]

// const val=function(i){
//     console.log('hey how are you',i)
// }
// console.log(val)

// const val=(a, b)=>a+b
// console.log(val(10,11))

// values=[1,2,4,5,4]
// values.forEach(element => {
//     console.log(element)
// });

// closures

// function sum(a,b){
//     function add(){
//         console.log(a+b)
//     }
//     add()
// }
// sum(10,12)


// destructuring

// let obj={
//     name:'ashkar',
//     age:23,
//     place:'purakkad'

// }

// let {
//     name,
//     age,
//     place
// }=obj;
// console.log(name,age,place)

// const {name,
//     ...other
// }=obj;
// console.log(other)

// class program in javascript example

class Student{
    name
    age
    place
    constructor(name,age,place){
        this.name=name
        this.age=age
        this.place=place
    }
    getPlace() {
        console.log(this.place)
    }
    static giveAge(){
            console.log(age)
        }
    }

let std=new Student('ashkar',23,'purakkad')
std.getPlace()
Student.giveAge()
