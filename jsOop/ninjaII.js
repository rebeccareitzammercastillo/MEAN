// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength

// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

function Ninja(name) {
    this.name = name;
    this.health = 100; 
    var speed =  3;
    var strength = 3;
    this.sayName= function(){
        console.log("My ninja name is " + this.name)
    }
    this.showStats= function(){
        console.log("Name: ", this.name , ", Health: ", this.health, ", Speed: ", speed, ", Speed: ", strength)
    }
    this.drinkSake= function(){
        this.health+=10
    }
    this.punch= function(ninja){
        // console.log(ninja instanceof Ninja)
        if (ninja instanceof Ninja){
        ninja.health-=5
        console.log(ninja.name, " was punched by", this.name, " and lost 5 Health!")
        }
    }
    this.kick= function(ninja){
        if (ninja instanceof Ninja){
        let kick = 15*strength
        ninja.health-= kick
        console.log(ninja.name, " was kicked by", this.name, " and lost", kick, " Health!")
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);