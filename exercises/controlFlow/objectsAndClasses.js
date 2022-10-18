/*const myCar = {
    make: "Honda",
    model: "accord",
    year: 1990,
    nickName: "kiki",
    isLoud: true,
    isRunning: false
}
console.log(myCar.isLoud)

const groceryList = ["chicken", "chips" , "bread"];

groceryList[0];

const chicken ={
    wing: 2,
    flavor: "mojo"
} */

/*const house = {
    door: 9
}
house.window = 30; //add a property
console.log(house);
house.bathrooms = 7; 
house.hasGarden = true;
house.bathrooms = 6;
console.log(house);*/

/*const myPet = {
    name: "Molly",
    age: 10,
    favoriteThings: ["sleeping", "snuggling", "food"],
    speakFrench: false,
    solveRubiksCube: false,

}
myPet.solveRubiksCube = true; //this is allowed to change a variable
console.log(myPet);*/

function Vehicle (vin, make, model) {
    //constructor
    constructor(vin, make, model) 
        this.vin = vin;
        this.make = make; 
        this.model = model;
    //static method
        start () {
            this.running = true;
            console.log("running")
        }

    
}


//const plane = new Vehicle("asdfkjla;sldfj", "Boeing");
//const myFirstCar = new Vehicle("98798uoiurwer", "Honda");



//instantiated a new object
const car = new Vehicle ("ad;lfkjasdlfj34789" , "Toyota", "Camry");
