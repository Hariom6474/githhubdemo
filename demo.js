console.log("I love Git");
 
let newName=document.querySelector('title');
newName.innerHTML = 'Item Lister 2';

let mainHeader=document.querySelector('#main-header');
mainHeader.innerText = 'Lister';
console.log(mainHeader.textContent);
mainHeader.innerHTML = '<h3>Hello</h3>';
mainHeader.style.borderBottom = 'solid 6px black';

let addItems = document.getElementsByClassName('list-group-item');

addItems[0].style.fontWeight = "bold";
addItems[1].style.fontWeight = "bold";
addItems[2].style.fontWeight = "bold";
addItems[3].style.fontWeight = "bold";
addItems[2].style.backgroundColor = "green";
