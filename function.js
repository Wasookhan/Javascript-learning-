// function prod (num1,num2){
//     return console.log(num1*num2)
// }
// prod(2,3);

function prod (num1,num2){
    return num1*num2;
}
console.log(prod(2,3));

//***************Function ,objects */
const obj = {
    name:"wasii ullah",
    age: "20
}

function information(anyObject){
    console.log(`my name is ${anyObject.name}, and i am ${anyObject.age} years old`)
}
information(obj);

/// functions, arrays//////

const arr = [200,300,543,678];
function secondValue(value){
     return value
}
console.log(secondValue(arr[1]));