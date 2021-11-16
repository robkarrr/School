/*

ARRAY SHUFFLE

*/


const numbers = [1,5,3,10,34,6,8,345,123,43,65];


/*
numbers.sort((a, b) => 0.5 - Math.random());

*/
// Fisher Yates Algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


console.log("Numbers before shuffle", numbers);

shuffleArray(numbers)

console.log("Shuffled numbers", numbers);
