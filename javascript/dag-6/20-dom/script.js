/**
 * DOM - Document Object Model
 */


const firstLink = document.querySelector('#link-1');


console.log("Fist Link: ",firstLink);

const firstParagraph = document.querySelector('p')

console.log("First paragraph: ",firstParagraph);

const errorParagraph = document.querySelector('p.error')

console.log(errorParagraph);

console.log(firstLink);

console.log(firstLink.parentElement);

console.log(firstLink.parentElement.parentElement)

console.log(firstLink.parentElement.nextElementSibling)

console.log(firstLink.innerText)

firstLink.innerText = "Let me google that for you!"

console.log(firstLink.innerText)

console.log(errorParagraph.innerText);

console.log(errorParagraph.innerHTML);

const paragraphs = document.querySelectorAll('p');


paragraphs.forEach(p =>  {console.log(p.innerHTML)})

firstLink.getAttribute('href');

document.querySelector('img').getAttribute('src');

firstLink.setAttribute('href', 'https://www.bing.com')