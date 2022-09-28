class Ola{
    constructor(distance,waitingPeriod,rate,vehicletype){
        this.distance= distance;
        this.waitingPeriod=waitingPeriod;
        this.rate=rate;
        this.vehicletype=vehicletype;
    }
setDistance(dist){
        this.distance=dist;
    }
getRideDetails(){
        return(`The distance of the ride is ${this.distance} with waiting period of 
        ${this.waitingPeriod} the vehicle type is inova with AC ${this.vehicletype} and rate of ${this.rate}`)
    }
getRate(){
        let totalRate = (this.distance *this.vehicletype* this.rate)+ (this.waitingPeriod * 5)
        return totalRate;
    }
}
let customer1= new Ola (100,0,15,5)
console.log(customer1.getRate());
customer1.setDistance(100);
console.log(customer1.getRate());
console.log(customer1.getRideDetails());


// person deatials

class Person {
    constructor (Name, Age, Place, DOB){
      this.Name=Name;
      this.Age=Age;
      this.Place=Place;
      this.DOB=DOB;
}
getDeatials(){
return(`the name of person ${this.Name} the age is ${this.Age} the place is ${this.Place} DOB is ${this.DOB}`)
}

}

let person1 = new Person ("Dwarak", "24", "coimbatore", "29.11.1998")
let person2 = new Person ("Mithun", "14", "Erode", "30.08.2008")
let person3 = new Person ("Madhu", "20", "coimbatore", "24.12.2002")
let person4 = new Person ("Logesh", "28", "Sathiyamangalam", "24.12.1993")
let person5 = new Person ("Dhivya", "27", "Punjai Puliam Patti", "20.12.1994")

console.log(person1.getDeatials());
console.log(person2.getDeatials());
console.log(person3.getDeatials());
console.log(person4.getDeatials());
console.log(person5.getDeatials());


// class circel method

class Circel{

    constructor(radius,color,area){
        this.radius=radius;
        this.color=color;
        this.area=area;
    }
    getDeatials(){
        return(`${this.radius}`)
    }
    getDeatials(){
        return(`${this.color}`)
    }

getDeatials(){
    return(`${this.area}`)
}
}

let C1 = new Circel(1.0,"red","200sqft");
console.log(C1);


// class movie

class Movie {
constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}

getDeatials(){
    return(`the movie name is ${this.title} the produiced by ${this.studio} the rating is ${this.rating}`);

}

}

let Movie1=new Movie("casino Royal","Eon Productions","PG13");
let Movie2=new Movie("Vikram","RKFI","PG");
let Movie3=new Movie("Thiruchittram palam","2D","PG");

console.log(Movie1.getDeatials());

   
