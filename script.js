// const sectionBYid = document.getElementById('container');
const sectionBYquery = document.querySelector('#container');

const second = document.querySelectorAll(".second");
const third = document.querySelector('ol li.third');

// sectionBYid.innerText += 'Hello';
// //or
const h2 = document.createElement('h2');
h2.innerText = 'hello';
sectionBYquery.append(h2);

const footer = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');

const newLI = document.createElement('li');
newLI.innerText = 'four';
const ul = document.querySelector('ul')
ul.append(newLI);

const lis = document.querySelectorAll('ol li');
for (let li of lis) {
    li.style.backgroundColor = 'Green';
};

footer.remove();