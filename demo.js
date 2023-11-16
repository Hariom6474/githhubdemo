var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

// addItem function
function addItem(e) {
  e.preventDefault();
  // get input value
  var newItem = document.getElementById("item").value;
  // create new li element
  var li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));
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
