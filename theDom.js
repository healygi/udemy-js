// const para = document.querySelector('body > h1');

// console.log(para);

const paras = document.querySelectorAll('p'); //gets all p tags and stores them in Node list

console.log(paras[2]); //can use indexing to select p tag from list

const title = document.getElementById('page-title');

const errors = document.getElementsByClassName('error'); //html collection - 

const paras = document.getElementsByTagName('p'); //html collection - cant use forEach in html collection

const para = document.querySelector('p'); // gets first p from top of html file

console.log(para.innerText)

para.innerText = 'ninjas are awesome!'; //chnages txt in paragraph

paras.forEach(para => {
    console.log(para.innerText); //adds new text to each paragraph
    para.innerText += 'new text';
});

const content = document.querySelector('.content');

console.log(content.innerHTML); //gets inner html within div which is a p tag

content.innerHTML = '<h2>This is a new h2</h2>' //changes content of p tag - if you put += then it keeps both. 

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;

});

//getting an attribute:

const link = document.querySelector('a');

console.log(link.getAttribute('href')); //gets value of attribute
link.setAttribute('href', 'http://www.google.com'); //changes href attribute
link.innerText = 'Google'; //changes text

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success'); //changes class name
mssg.setAttribute('style', 'color: green;'); //changes color of txt to green although no css file exists

//to access CSS details 

const title = document.querySelector('h1');

console.log(title.style); //access to all css details on h1 tag
console.log(title.style.color) //prints color for h1 tag in console

//can check what name is by using the above logs

title.style.margin = '50px'; //updates margin
title.style.color = 'crimson'; //updates color
title.style.fontSize = '60px'; //updates font 
title.style.margin = ''; //gets rid of margin

// ADDING AND REMOVING CLASSES 51

const content = document.querySelector('p');

console.log(content.classList); //lists DOM classes
content.classList.add('error'); //adds error as a class
content.classList.remove('error'); //removes error as a class
content.classList.add('success'); //adds success as a class

// CHALLENGE

function addClass() {

const paras = document.querySelectorAll('p');
      if paras.innerHTML = "error" {
        return paras.classList.add('error');
      } else if {
        paras.innerHTML = "success" {
            return paras.classList.add('success');
        }
     }
}

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if (paras.textContent.includes('error')) {
        paras.classList.add('error');
    } if (paras.textContent.includes('success')) {
           paras.classList.add('success');
        }
 });

 const article = document.querySelector('article');

 console.log(article.children);
 console.log(Array.from(article.children));

 Array.from(article.children).forEach((child) => {

 });

 const items = document.querySelectorAll('li');

 items.forEach(item => {
    item.addEventListener('click', () => { 
    console.log("you clicked me");
    });
 });

 ul.remove(); //a method that removes it from the DOM

 e.target.remove(); // removes a targed item

 //e is an event parameter

 const li = document.createElement('li'); //creates a new element