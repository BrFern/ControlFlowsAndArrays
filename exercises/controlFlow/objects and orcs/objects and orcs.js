// // const adventurer = {
//     name: "Bailey",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "tums"],
//     companion: {
//         name: "Peanut",
//         type: "corgi",
//         companion: {
//             name: "tick",
//             type: "parasite",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//         }
  //  }
// }
// console.log(adventurer.belongings[0]);

// //for(let i=0; i<adventures.belongings.length; i++); {
//    // console.log(adventurer.belongings[i]);
// //}

// //ACCESS THE COMPANION OBJECT
// console.log(adventurer.companion); // { }
// console.log(adventurer.companion.type); // values inside { }
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.companion.type)
// console.log(adventurer.companion.companion.belongings[2]) //get health insurance
// 
// const foo = {
//     someArray: [1,2,3],
//     someObject: {
//         someProp: 'oh hai, Mark',
//     }
//     someMethod: function () {
//         console.log("inside of method");
//     }
// }
// console.log(foo.someObject.someProp); //oh hai
// console.log(foo.someArray[0]);
// console.log(foo.someMethod());
// const player = {
//     name: "Josh the Great",
//     health: 1000,
//     power: 1000,
//     stamina: 1000
// }
// const bigBadBoss = {
//     name: "Magnardo the Merciless",
//     health: 10000000,
//     power: 10000000,
//     stamina: Infinity
// }
// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     };
//     return newPlayer;
//   }

// class Character {
//     //constructor
//     constructor(name, age, eyes, hair, lovesCats=false, lovesDogs){
//         this.legs=2;
//         this.arms=2;
//         this.name=name;
//         this.age=age;
//         this.eyes= eyes;
//         this.hair= hair;
//         this.lovesCats=lovesCats;
//         this.lovesDogs=lovesDogs || FontFaceSetLoadEvent;
//     }
//     //setter method
//     setHair(hairColor) {
//         this.hair = hairColor;
//     }
//     greet(otherCharacter) {
//         console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//         console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     smite() {
//         console.log('I smite thee, you vile fiend!');
//     }
// }
// const p1 = new Character("Bailey", 29, "hazel", "brown", true, true);
// const enemy = new Character("Grumpy Groober", 87, "yellow", "orange", false, false);
// // console.log(p1.greet("Bob"));
// // console.log(p1.smite());
// // console.log(enemy.greet("Sauron"));

// p1.setHair('red')
// console.log(enemy.classyGreeting(p1));

//Parent Classes

// 
class Car {
    constructor(maker, serialNumber) {
        this.serialNumber =serialNumber;
        this.maker = maker;
    }
    drive() {
        console.log('Vroom Vroom');
    }
}
//factory class
class Factory{
    constructor(company){
        this.company = company
        this.cars = []
    }
    generateCar() {
    const newCar = new Car (this.company, this.cars.length);
    this.cars.push(newCar);
}
findCar (index) {
    return this.cars[index];
}

}

const tesla = new Factory('Tesla');
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));

console.log(tesla);
console.log(tesla.findCar[1]);

const porsche = new Factory ("Porsche")
porsche.generateCar();
porsche.generateCar();
porsche.generateCar();
porsche.generateCar();
console.log(porsche);
console.log(porsche.findCar(1));
//const newCar = new Car('Mazda' 'slk980we')
//console.log(newCar);