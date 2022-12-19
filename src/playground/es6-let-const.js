// Variable defined with 'var' can be modified and redefined
var nameVar = 'Adam';
var nameVar = 'Harry';
console.log('nameVar', nameVar);

// Variable defined with 'let' can be modified, but not redefined
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

// Variable defined with 'const' cannot be redefined nor modified
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scope: variable is not available outside of the function
function getPetName() {
    var petName = 'Hal';
    return petName;
}

var fullName = 'Adam Dixon';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}



console.log(firstName);