//function areBothEven(n1,n2) {
 //   return !(n1 % 2) && !(n2 % 2);

//console.log(areBothEven (2,6));

//{
  //  name: "Maria",
    //skills: ["HTML" , "CSS", "JavaScript"]

/*let maria = getDevObject("Maria",  "HTML" , "CSS", "JavaScript");
    function getDevObject(name, ...skills){
        return{
            devName: name,
            jobSkills: skills
        }
    }
   console.log(getDevObject(maria));
      /* function getDevObject(name) {
        let skills = [];
        for(let i=1; i < arguments.length; i++) {
            skills.push(arguments[i]);
        return 
            devName: name,
            jobSkills: skills
        
       } 
    } console.log(getDevObject(maria))

//extra curly braces, figure out what goes where */

/*const sayName= (name) => {
    //console.log('Hello my name is ' + name); // concatination
    console.log(`Hello my name is ${name}`);
}
sayName('Kadija');
sayName('Max the Maverick');
sayName("Overton");

const calculateAreaOfSquare = (length, height) => {
    let sqft = length * height;
    console.log(`My square or rectangle is ${sqft} square feet`)
}
calculateAreaOfSquare(38,18); */

const calculateAreaOfTriangle = (base, height) => {
    let triangle = (base * height) / 2;
    console.log(`The area of my triangle is ${triangle} square units`)
}
calculateAreaOfTriangle(34, 27);

const calculateAreaOfCircle = (radius) => {
    let circle = Math.pow(3.14 * radius)
    console.log(`The area of my circle is ${circle}`)
}
calculateAreaOfCircle(52);

/*const planetHasWater = (planet) => {
    if(planet === 'Earth' || planet === 'Mars') {
        return true;
    } else if {
        return false;
    }
}
console.log(planetHasWater('Earth'));*/

