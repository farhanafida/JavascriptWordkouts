let map=new Map()

map.set('1','ashkar')
map.set('2','shameem')
map.set('3','ajnas')


for ([k,v] of map){
    console.log(k,v)
}

console.log()

map.forEach((k,v)=>
    console.log(v,k)
)


let num=[1,2,3,4]

let doubleNumber=num.map(double)

console.log(doubleNumber)

function double(element){
    return element*element
}