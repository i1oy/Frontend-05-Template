class Human {
    hurt(damage) {
        console.log(`You was hurt, type: ${damage}`);
    }
}

class Dog {
    bite() {
        return "bite";
    }
}

let person = new Human();
let puppy = new Dog();

person.hurt(puppy.bite());
