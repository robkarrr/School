/**
 * DOM - Document Object Model 102
 *
 */

const listitemsEl = document.querySelector('ul');
const listitems = document.querySelectorAll('li');
const addButton = document.querySelector('#add');


listitems.forEach(listitem => {
    listitem.addEventListener('click', (e) => {
        console.log(`You clicked me: `, e.target.innerText ,e.target);
        e.target.style.color="green";
    })
});


addButton.addEventListener('click', () => {
    listitemsEl.innerHTML += '<li> I am a new list item</li>';
})