// Rewrite the given code as it is seen by the interpreter
// Predict the outputs
// Run the original code and compare the outputs to your predictions

// 1
//Given code:
// console.log(hello);                                   
// var hello = 'world';  

//interpreter:
var hello;
console.log(hello); //undefined
hello='world'; 

// 2
//Given code:
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//interpreter:
var needle = 'haystack';
test();
function test(){
    var needle='magnet';
    console.log(needle);
}
// =>magnet

// 3
//Given code:
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//interpreter:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //=> super cool

// 4
//Given code:
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// interpreter:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food='gone';
}
//=> chicken, half-chicken

// 5
//Given code:
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//Interpreter:
var mean;
mean(); //typeError: mean is not a function
console.log(food);
mean = function(){
    var food;
    food = "chicken;";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);


// 6
//Given code:
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//Interpreter:
var genre;
console.log(genre);
genre= 'disco';
rewind();
function rewind(){
    var genre;
    genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre); //=> undefined, rock, r&b, disco

// 7
//Given code:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

//Interpreter:
dojo = "san jose";
console.log(dojo);
learn();
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); //=> san jose, seattle, burbank, san jose

// 8
//Given code:
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

//Interpreter:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //typeError: due to constant variable
    }
    return dojo;
}
