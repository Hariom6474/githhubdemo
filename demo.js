console.log("I love Git");
 
let newName=document.querySelector('title');
newName.innerHTML = 'Item Lister 2';

let mainHeader=document.querySelector('#main-header');
mainHeader.innerText = 'Lister';
console.log(mainHeader.textContent);
mainHeader.innerHTML = '<h3>Hello</h3>';
mainHeader.style.borderBottom = 'solid 6px black';
// getElementByClassName
// let addItems = document.getElementsByClassName('list-group-item');

// addItems[0].style.fontWeight = "bold";
// addItems[1].style.fontWeight = "bold";
// addItems[2].style.fontWeight = "bold";
// addItems[3].style.fontWeight = "bold";
// addItems[2].style.backgroundColor = "green";

// getElementByTagName
let li = document.getElementsByTagName('li');

li[0].style.fontWeight = 'bold';
li[1].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';
for(let i=0; i<li.length; i++) {
    li[i].style.backgroundColor = 'yellow';
}