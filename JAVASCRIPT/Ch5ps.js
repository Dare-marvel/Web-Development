//Problem 1
// let numbers = [1,2,3]

// let n = prompt("Enter the number of numbers u want to enter");

// for(let i=0 ; i< n ;i++){
//     let numb=prompt("Enter a number")
//     numbers.push(parseInt(numb))
// }

// console.log(numbers)

//Problem 2
// while(true){
//     let inp=prompt("Enter a number")
//     numbers.push(parseInt(inp))
//     if(inp==0){
//         break
//     }
// }

// console.log(numbers)

//Problem 3

// let numdiv=[10,20,30,2,2,5,6,8]

// function myfunc(value){
//     if(value%10==0){
//         return value
//     }
// }

// console.log("Numbers which are divisible by 10")
// console.log(numdiv.filter(myfunc))

//Problem 4

// let squares = []

// while(true){
//     let inp=prompt("Enter a number")
//     squares.push(parseInt(inp**2))
//     if(inp==0){
//         break
//     }
// }

// console.log(squares)

//Problem 5
let fact = [1,2,3,4,5]

let factorial = (acc,curr_value) =>{
    let i=0
   return acc * curr_value
}

console.log("The reqd factorial is "+fact.reduce(factorial,1))