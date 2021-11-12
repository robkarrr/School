/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med lite info om varje pet.
 */

// Array of pets

// WORKSHOP DEL 1!
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];

const petListEl = document.querySelector('#petslist');
pets.forEach(pet => {
    petListEl.innerHTML += `
        <li>
            ${pet.name} is a ${pet.species} and is ${pet.age} year(s) old. His owner is ${pet.owner?.name} and his favortie thing to do is ${pet.hobbies.join(', ')}.
        </li>

    `;
})



// WORKSHOP DEL 2!

