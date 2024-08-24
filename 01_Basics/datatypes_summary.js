// / primitive

// 7 types : string, number,boolean,null,undefined,symbol,BigINt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 651555665444454654612n
// console.log(typeof bigNumber)


// /reference (non primitve)

// Array,Objects,Functions


const heroes = ["Shakatiman","nagraj","doga"]
let myobj = {
    name: "smir",
    age: "22",
}
// console.log(myobj)

const myfunction = function(){
console.log("hello world")
}

myfunction()
