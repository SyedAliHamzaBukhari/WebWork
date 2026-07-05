// Printing
console.log("!st one") 

// console.error("False")
// console.warn("Intimidate")

const vriable = 5 ;
console.log(`${vriable}`)

import { Console } from "console";
// User input
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });


// const uip = prompt("-> ") 
// console.log(uip)

// Variables
//   Can be changed
   var deer = "Ghadeer" // 'Function Scoped' - access in function 
   let ghad = "Haider"  // 'Block scoped' - like normal variables
//   Can't change
   const h = 17

// Example difference between let and var
// --------------var------- Can be accessed in the same function 
if (true) {              // anywhere like this is the main func.
       var gha = "Deer"  // it can be used
}
console.log(gha)         // Case-1: Accessible

function var_exp() {
       var num1 = 3.9
       console.log(num1)
}
// console.log(num1)   Case-2: ReferenceError: num1 is not defined
// ------------------------

// --------------Let------- Basic functionality
let a = 5 ; console.log(a)
function let_exp() {
       let a = 6 ; 
}
// console.log(a)        // 6 is not of any use in main 
// ------------------------

// Type Conversion
let c = 20 ;
let d = '0' ;    console.log(c * d)     // Not a Number = NaN
let e = 'T-' ;   console.log(e + c) ;   console.log(e / c)
console.log(String(c) + d)              // .tostring() : converts no. to str
// ------------------------ 



