//primitive (stack)
/*
string 
number
boolean
null
undefined
symbol
bigint

*/
let firstname = "Varun"
let anotherName = firstname
const age = 20
const score = 200.09
let isLoggedIn = true
const nodeVersion = null
let bankbalance = undefined
const buttonid = Symbol("ID")
const aReallyLongNumber = 999999999999999999999


//reference (non primitive) - objects (heap)

/*
arrays
objects
functions

*/

const numbers = [1,2,3,4]
const heroes = [
    "superman",
    "varun"
]

const userObject = {
    name: "varun",
    age: 22,
    isLoggedIn: true
}

let anotherUser = userObject

let sayhello =[]
const hello = {}


const sayHi = function() {
    console.log("Varun")
}

const loginUser = function(){}