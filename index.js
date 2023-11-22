function getFormValue(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;
  // const date = document.getElementById("date").value;
  // const time = document.getElementById("time").value;
  let myObj = {
    name: name,
    email: email,
    phone: phone,
    // date: date,
    // time: time,
  };
  let elem = JSON.stringify(myObj);
  let ulist = document.querySelector(".list-group");
  let li = document.createElement("li");
  let button = document.createElement("input");
  var editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "editBtn";
  editBtn.value = "Edit";
  button.type = "button";
  button.value = "Delete";
  button.id = "myButton";
  li.appendChild(button);
  li.appendChild(editBtn);
  li.className = "list-group-items";
  li.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
  if (ulist) {
    ulist.appendChild(li);
  }
  button.addEventListener("click", function (e) {
    let li = e.target.closest("li");
    if (li) {
      localStorage.removeItem(email);
      ulist.removeChild(li);
    }
  });
  editBtn.onclick = (e) => {
    let li = e.target.closest("li");
    if (li) {
      localStorage.removeItem(email);
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("phone").value = phone;
      ulist.removeChild(li);
    }
  };
  localStorage.setItem(email, elem);
  // deserialized can be used if we had to change the value
  // let deserialized = JSON.parse(elem);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
