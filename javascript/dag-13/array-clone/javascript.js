

const names = ["Johan", "Kalle", "Pelle"];
//const clone_fail = names;

//const popcorn =  clone_fail.pop(); // Copies the reference to the array not the content of the array

//const new_array = [];

// for(let i = 0; i < names.length; i++){
//     console.log("name: ", names[i]);
//     new_array.push(names[i]);
// }

// const new_array = names.filter(person_name => true);



const new_array = [...names];




console.log("names:", names)
console.log("new_array:", new_array);
