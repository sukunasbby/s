/*obt an element/ dom node*/

const elem = document.getElementsByTagName ('h1');
console.log(Element);

const elementID = document.getElementById('n1');
console.log(elementID);

const elementClass = document.getElementsByClassName('title');
console.log(elementClass);


/*query selector*/
const h1 = document.querySelector('h1');
console.log(h1);

const h1ByClass = document.querySelector('title');

h1.textContent = "cambiano desde js"