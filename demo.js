console.log("I love Git");

// let newName = document.querySelector("title");
// newName.innerHTML = "Item Lister 2";

// let mainHeader = document.querySelector("#main-header");
// mainHeader.innerText = "Lister";
// console.log(mainHeader.textContent);
// mainHeader.innerHTML = "<h3>Hello</h3>";
// mainHeader.style.borderBottom = "solid 6px black";
// getElementByClassName
// let addItems = document.getElementsByClassName('list-group-item');

// addItems[0].style.fontWeight = "bold";
// addItems[1].style.fontWeight = "bold";
// addItems[2].style.fontWeight = "bold";
// addItems[3].style.fontWeight = "bold";
// addItems[2].style.backgroundColor = "green";

// getElementByTagName
// let li = document.getElementsByTagName("li");

// li[0].style.fontWeight = "bold";
// li[1].style.fontWeight = "bold";
// li[3].style.fontWeight = "bold";
// li[2].style.backgroundColor = "green";
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "yellow";
// }
// querySelector()
// let items2 = document.querySelector(".list-group-item:nth-child(2)");
// items2.style.backgroundColor = "green";
// let items3 = document.querySelector(".list-group-item:nth-child(3)");
// items3.style.visibility = "hidden";
// let it = document.querySelectorAll(".list-group-item");
// it[1].style.color = "springgreen";
// var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

var itemsList = document.querySelector('#items');
// parentNode
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemsList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemsList.parentElement.parentElement.parentElement);

// childNodes - it will include any white space
// console.log(itemsList.childNodes);

// childrean
// console.log(itemsList.children); 
// console.log(itemsList.children[0]); 

// firstChild - include any white space
// console.log(itemsList.firstChild);

// firstElementChild
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent = 'HelloWorld';

// lastChild
// console.log(itemsList.lastChild);

// lastElementChild
// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent = 'HelloWorld';

// nextSibling
// console.log(itemsList.nextSibling);
// nextElementSibling
// console.log(itemsList.nextElementSibling);

// previousSibling
// console.log(itemsList.previousSibling);
// previousElementSibling
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color = 'green';

// create a element
// create a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
// add id
newDiv.id = 'hello';
// add attribute
newDiv.setAttribute('title', 'hello-div');
// create text node
var newDivText = document.createTextNode('Hello');
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
var item1 = document.querySelector('#items');
var item12 = document.querySelector('.list-group-item');

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1); // insert newDiv before h1
item1.insertBefore(newDiv, item12); // insert inside items1 and before items12

console.log(newDiv);