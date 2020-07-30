class Bike{
    price: number;
    max_speed: string;
    miles: number;

    constructor(price:number, max_speed:string){
        this.price= price;
        this.max_speed= max_speed;
        this.miles=0;
    }

    riding(){
        this.miles+=10;
        console.log(`Riding ${this.miles} miles`);
        return this
    }

    reverse(){
        if(this.miles<=0){
            console.log("Can't reverse")
        }
        else{
        this.miles-=5;
        console.log(`Reversing ${this.miles} miles`);
        }
        return this

    }

    displayInfo() {
        console.log(`$${this.price}`);
        console.log(this.max_speed);
        console.log(`${this.miles} miles`);
        return this
    }


}
let bike1 = new Bike(200, "25mph")
bike1.riding().riding().riding().reverse().displayInfo()
let bike2 = new Bike(100, "15mph")
bike2.riding().riding().reverse().reverse().displayInfo()
let bike3 = new Bike(150, "30mph")
bike3.reverse().reverse().reverse().displayInfo()