let numbers=[]
for (let i=1;i<11;i++){
    numbers.push(i)
}
console.log(numbers.join(' '))

numbers.unshift(0)// add element in begginning of an array

numbers.shift() // remove elements from begginning of an array


console.log(numbers)

numbers.splice(0,0,0,-1,-2) // (index, delete doc, elements....)

console.log(numbers)


// for (j=0;j<numbers.length;j++){
//     console.log(numbers[j] )
// }

stud={
    name:'shalom',
    age:25,
    place:'kottayam',
    setteled:'canada'
}

obj={
    1:'hey',
    2:'h',
    3:'hoi'
}
console.log(obj[1])

for (let j in stud)
    console.log(j,':',stud[j])
