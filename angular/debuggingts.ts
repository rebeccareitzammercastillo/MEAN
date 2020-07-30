//1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "hello";
//myString is expecting a string. Changed the number to a string.

//2. Setting the types for function parameters
function sayHello(name: string, num: number) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit", 5));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('hello', 9));
//the function parameters only allowed for a string, therefore a number parameter was added.

//3. Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
//add a question mark after middle name so thati the parameter can be added or not. 

//4. Interfaces and function parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
//interfaces must have the exact keys and values can change. Changes Jay's belt to belts.

//5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Shane", "Shane");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    firstName: "Alan",
//    lastName: "Turing",
//    fullName: "Alan Turing"
// }
const turing = new Ninja("Alan", "Turing")
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
//Ninja is not a callable function. Gave Ninja and the parameters it need for const shane and turing.

//6. Arrow functions
var increment = (x:number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x:number) => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x:number,y:number) => x * y;
// Nor is this working:
var math = (x:number, y:number) => { 
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
};
//all variables needed a variable type of number. 

//7. Arrow functions and 'this'
class Elephant {
    constructor(public age: number){}
    birthday = () => { //using the word function needed to be replaced with the arrow function in order make it work like a true function.
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.