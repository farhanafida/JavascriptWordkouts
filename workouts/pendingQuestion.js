


numbers=[1,23,3,25,2,21,13,4,2]

function FirstAndLast(numbers){

    console.log('First element:',numbers[0])
    console.log('Last Element:',numbers[numbers.length-1])
}

FirstAndLast(numbers)



///sum of positive numbers in an array


num=[1,2,3,4,5,6]
let sum=0
for (let i of num){
    if (i>0){
        sum=sum+i
    }
}
console.log(sum)



num.forEach((val,ind,arr)=>{
    arr[ind]=val
    console.log(arr[ind])
})

// console.log(arr)


arr=[1,2,3,4]

const[num1,num2,...nums]=arr

console.log(num1,num2,nums)

objs={
    name:'shoukath',
    age:35,
    place:'dubai',
    address:{
        job:'pro',
        location:'dubai'
    }
}

const{
    name,
    age,
    place,address:
    {
        job : joli,
        location
    }
}=objs

console.log(name,age,place,joli,location)