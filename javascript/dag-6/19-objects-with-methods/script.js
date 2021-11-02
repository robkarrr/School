/* 

Objects with Methods

*/


const mjauJR = {
name: "MjauJr",
hobbies: "be cute",
    species: "Kitten",
    age: 1,
    sound: "mjauuouou!",
    mjauCounter: 0,
    speak: function(){
        this.mjauCounter++;
        console.log(this.sound);
        console.log(`Mjaud time stoday ${this.mjauCounter}`);
    },
}

const barkby = {
    name: "Barksby",
    species: "Dog",
    age: 5,
    hobbies: ["Tail, wagging", "Car-chasing", "Eating lots of treats"],
    owner: {
        name: "Mr. Beans",
        age: 57,
    },
    sound: "WOOF",
    speak: function(){
      console.log(this.sound);
    },
}


mjauJR.sound = "mjau?";

// barkby.speak();
// mjauJR.speak();
// mjauJR.speak();



// let name1 = "Johan";
// let name2 = name1;

// name1 = "Pelle";


// console.log(name1, name2);

let pelle = "Pelle";
let pelle_age = 2;


const happyBirthday = (name, age) => {
    age++;
    console.log(`Happy Birthday ${name}`, age)
}

happyBirthday(pelle, pelle_age);


const happyPetBirthday = (pet) => {
    pet.age++;
    console.log(`Happy Birthday ${pet.name} on ${pet.age} years old!`);
}

happyPetBirthday(mjauJR);