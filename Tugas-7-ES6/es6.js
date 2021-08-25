// 1. Mengubah fungsi menjadi fungsi arrow
const golden = () => {
  console.log('this is golden!!');
}
console.log('----------------------------------------------------------------------');
console.log('1. Mengubah fungsi menjadi fungsi arrow');
console.log('----------------------------------------------------------------------');
golden()


// 2. Sederhanakan menjadi Object literal di ES6
const newFunction = (firstName, lastName) => {
  return {firstName, lastName,
    fullName() {
    console.log(`${firstName} ${lastName}`)
    }
  }
}

console.log('----------------------------------------------------------------------');
console.log('2. Sederhanakan menjadi Object literal di ES6');
console.log('----------------------------------------------------------------------');
//Driver Code
const person = newFunction("William", "Imoh");
console.log(person);
person.fullName();  


// 3. Destructuring
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject;

console.log('----------------------------------------------------------------------');
console.log('3. Destructuring');
console.log('----------------------------------------------------------------------');
// Driver code
console.log(firstName, lastName, destination, occupation)


// 4. Array Spreading
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]

console.log('----------------------------------------------------------------------');
console.log('4. Array Spreading');
console.log('----------------------------------------------------------------------');
//Driver Code
console.log(combined)


// 5. Template Literals
const planet = "earth"
const view = "glass"
let before = `Lorem ${view} dolar sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

console.log('----------------------------------------------------------------------');
console.log('5. Template Literals');
console.log('----------------------------------------------------------------------');
// Driver Code
console.log(before) 