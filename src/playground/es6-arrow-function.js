const square = function (x) {
    return x * x;
}

console.log(square(4));

// Same functionality as above function (always anonymous)
// const squareArrow = (x) => {
//     return x * x;
// } 

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

var fullName = 'Adam Dixon';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

// const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName(fullName));