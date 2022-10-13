
console.log(one());
//function declaration
function one() {
    return 'one'
}
one(); //calling a function

//function expression
const two = () => {
    return 2;
}
const shortenedTwo = () => 2;

const baileyFern = {
    name: "Bailey",
    occupation: "Software Engineering Student",
    age: 29
}
const increaseAge = (person) => {
//dot notation
person.age += 1;
}
console.log(`I will be` ${person.age} `years old next year!`)
//call the function
increaseAge(baileyFern);