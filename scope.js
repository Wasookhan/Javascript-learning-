const userName = "wasoo" // global scope

if(true){
   
    let userName2 = "sami ullah"// local scope \\ block scope
    if(true){
        console.log(userName)
    }
    console.log(userName2)

}

function one(){
    let name = "wasoo"
    let id = 1
    console.log(fullName) // will through an error because variable fullName has block scope
    function details(){
         const fullName = name + "khan" ; // block scope variable
        console.log(id) // it will execute and print 1
    }
    details();
}
one();

