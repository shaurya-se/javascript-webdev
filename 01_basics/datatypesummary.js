//primitive
//7:string number boolean null undefined symbol bigint

// non primitive
// arrays objects functions

let str="123"
let num=123
let bool=true
let isnull=null
let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id===anotherid);
let bignumber=123456789n

let heroes=["shaktiman","ironman"]
let myobj={
    name:"shaurya",
    age:22
}
let myfunc=function(){
    console.log("hello world")
}

console.log(typeof str)
console.log(typeof num)
console.log(typeof bool)
console.log(typeof isnull)
console.log(typeof id)
console.log(typeof bignumber)
console.log(typeof heroes)
console.log(typeof myobj)
console.log(typeof myfunc)

