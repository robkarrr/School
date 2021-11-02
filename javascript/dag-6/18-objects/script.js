/*

OBJECTS

*/


/*
const fluffles = [
    "Mr. Fluffles",     // 0 = name
    3,                  // 1 = age
    "Bengt",            // 2 = owner
    "Annoy people",     // 3 = hobbies
    "Cat"               // 4 species 
]

const captainCat = [
    "Captian Cat",     // 0 = name
    5,                  // 1 = age
    "Roger",            // 2 = owner
    "Mjao",             // 3 = hobbies
    "Cat"               // 4 species 

]
const showPetInfo = (pet) => {

console.log(`${pet[0]} is a ${pet[4]} his owner is ${pet[2]}, his hobbies is to ${pet[3]} and he is ${pet[1]} years old.`);
}


showPetInfo(fluffles);
showPetInfo(captainCat);
*/


// Object litteral
const fluffles = {
    name: "Mr. Fluffles",
    age: 3,
    owner: "Bengt",
    hobbies: "Annoy people",
    species: "Cat",
}

const captainCat = {
    name: "Captain Cat",
    species: "Cat",
    age: 9,
    owner: "Agda",
    hobbies: "HIIT",
}

const mjauJr = {
    hobbies: "Be cute",
    species: "Kitten",
    age: 1,
    name: "Mjau Jr",
}

const showPetInfo = (pet) => {

    console.log(`${pet.name} is a ${pet.species} his owner is ${pet.owner}, his hobbies is to ${pet.hobbies} and he is ${pet.age} years old.`);
    }



console.log(mjauJr.owner);

showPetInfo(captainCat)
showPetInfo(mjauJr);


// console.log(fluffles);

// // vvv Dot notaion vvv
// console.log(captainCat.name); 

// // vvv Square bracket notation vvv
// console.log(fluffles['hobbies']);