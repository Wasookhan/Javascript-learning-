// declaring object

const users = {
    name: "Wasoo",
    email: "wasoo@gmail.com",
    id: 34,
}

console.log(users.email); // finding the value of name in users object
console.log(Object.keys(users)); // extracting all the keys

// Nesting objects
const entries = {
    username: {
        firstName: "Wasoo",
        lastName: "khan",
    },
    email: {
        personalEmail: "person@gmail.com",
        businessEmail: "person@.com"
    },
    id: 34,
}

 // finding the value of firstname in the username object nested in entries object
console.log(entries.username.firstName);

//merging of objects

const obj1 = {}// Another way of declaring object
obj1.key1 = "A",
obj1.key2 = "B",
obj1.key3 = "C",

 obj2 = {}
obj2.ke1 = "1",
obj2.ke2 = "2",
obj2.ke3 = "3",

 //mergeObj = {...obj1, ...obj2};// using spread operator

  mergeObj = (Object.assign({}, obj1, obj2)) // another way to merge  objects
 console.log(mergeObj);



 /// array of objects
  const arr = [
    objA = {
        name: " wasii",
        id: "32",

    },
    objB = {
        email: "hsh@gmail.com",
        cell: "0366798765",
    },
    objC = {

    }

  ]
  console.log(arr[0].name)
  console.log(arr[1].email)

