//this keyword in object

// const obj = {
//     name: "wasoo",
//     age: 21,
//     address: "darsamand hangu",
//     details:() => {
//         return this.address
//     }
// }
// details()

// SIMPLE FUNCTION
function add(num1,num2){ 
    return num1 + num2
}
console.log(add(3,6));

//ARROW FUNCTION
addNumbers = (num1, num2) =>{
     return num1 +num2
}
console.log(addNumbers(3,6));

//ANOTHER WAY OF ARROW FUNCTION
addTwo = (num1,num2) => (num1 + num2);
console.log(addTwo(3,6));

//IN AARROW FUNCTION IN THE BRACES YOU HAVE TO WRITE RETURN BUT IN PARENTHESIS THERE IS NO NEED OF
//WRITING RETURN

//++++++++++++++++++++++++++++Immediately Invoked Functions IIFE+++++++++++++++++=
//named IIFE
(function chai(){
    console.log("ye hai simple function")
}
)();// two  imediately invoked functions ,must write semicolon

//UNNAMED IIFEE
(
() =>{
    console.log("yeh hai arrow function ")
}
)();

// UNNAMED IIFE with parameters
(
    (name) =>{
        console.log(name) 
    }
)("wasoo")
