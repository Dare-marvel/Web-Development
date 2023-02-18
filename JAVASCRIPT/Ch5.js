const a=["Adwait",2,34,5]
console.log("This is my name:"+a[0])
//Lets try changing values of const
a[0]=3
console.log("After changing the value:"+a[0])
console.log("Length of array:"+a.length)

console.log("ToString method:"+a.toString())
// Shift Method - Removes first element and returns it
console.log("Shift method:"+a.shift())

// Unshift Method - Adds element to the start and returns the new length
console.log("Unshift method:"+a.unshift(21,34,23))

a2 = [1,2,3,5,4,6,6]
a3 = [23,45,1,12,34]

console.log("Concat Method:"+a.concat(a2,a3))

//Splice Method - Remove an element at a specified position and add new elements at that position
console.log("Splice Method:"+a3.splice(2,1,56,45,776))

function myfunc(item,index){
    console.log(`Element at ${index} is ${item}`)
}

//For each function 
console.log("For each loop for a3\n")
a3.forEach((element,index) => {
    console.log(`Element at ${index} is ${element}`)
});

console.log("For each loop for a2\n")
a2.forEach(myfunc)

const newfunc = (value,index) =>{
    return value * index
}

//Map function
const og_arr=[65, 44, 12, 4]
console.log("Demonstration of Map function")
const new_arr=og_arr.map(newfunc)
console.log(new_arr)

//Filter function
const ages=[32, 33, 16, 40]

const checkAdult = (value) =>{
    if(value>18){
        return value
    }
}

console.log("Demonstration of Filter function")
const filtered_ages = ages.filter(checkAdult)
console.log(filtered_ages)

//arr.reduce(callback(accumulator, currentValue), initialValue)

const num = [15.5, 2.3, 1.1, 4.7]

const func1 = (acc,curr_value) =>{
    return acc + Math.round(curr_value)
}

console.log("Demonstration of Reduce function")
console.log(num.reduce((func1),0))

//Array.from method

console.log("Demonstration of Array.from function")
console.log(Array.from("Adwait is a good table tennis player:"))

console.log(Array.from([1,2,3,4,5,6],elem=>elem**2))

//Demonstration of For-In loop - Iterates over the indexes of elements in array

const students = ['John', 'Sara', 'Jack']
console.log("For- In loop\n")
for (let idx in students){
    console.log(students[idx] + ' Purao')
}

//Demonstration of For-Of loop
console.log("For-Of loop\n")
for (let stud_name of students){
    console.log(stud_name + ' Nadkarni')
}
