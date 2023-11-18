console.log("I love git");
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

// addItem function
function addItem(e) {
  e.preventDefault();
  // get input value
  var newItem = document.getElementById("item").value;
  var newDescription = document.getElementById("description").value;
  // create new li element
  var li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDescription));
  // create delete button
  var deleteBtn = document.createElement("button");
  // add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // append button to li
  li.appendChild(deleteBtn);
  // create EDIT button
  var editBtn = document.createElement("button");
  // add class to edit button
  editBtn.className = "btn btn-sm float-right";
  // append text node
  editBtn.appendChild(document.createTextNode("Edit"));
  // append button to li
  li.appendChild(editBtn);
  // put li in items
  itemList.appendChild(li);
}

// remove item
function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure!")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filterItem
function filterItem(e) {
  e.preventDefault();
  // convert text to lowercsae
  var text = e.target.value.toLowerCase();
  // get list
  var items = document.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach(function (item) {
    var firstItem = item.childNodes[0].textContent;
    // var firstItem = item.firstChild.textContent;
    let secondItem = item.childNodes[1].textContent;
    if (
      firstItem.toLowerCase().indexOf(text) !== -1 ||
      secondItem.toLowerCase().indexOf(text) !== -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
