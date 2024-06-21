

values=[1,2,3,4,5,6]

let tot=values.reduce(sum)

console.log(tot)

function sum(prev,current){
    return prev+current
}

let s=values.reduce(
    function sum(prev,current){
        return prev+current
    }
)
console.log('sum:',s)


let max=values.reduce(
    function (accumultor,val){
        return Math.max(accumultor,val)
    }
)

console.log('maximum:',max)