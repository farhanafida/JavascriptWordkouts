

const arr=[1,2,3,4,5,6,7,8,9,10]


const val=arr.filter((num)=>num%2==0).map((num)=>num*num)


const odd=arr.map((num)=>num*num).filter((num)=>num%2==0)

console.log(val)

console.log(odd)