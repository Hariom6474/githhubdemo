function getFormValue(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
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
  li.className = "list-group-items";
  li.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
  ulist.appendChild(li);
  localStorage.setItem(email, elem);
  // deserialized can be used if we had to change the value
  let deserialized = JSON.parse(elem);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
