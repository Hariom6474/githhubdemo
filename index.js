function getFormValue(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;
  let myObj = {
    name: name,
    email: email,
    phone: phone,
  };
  showUserOnScreen(myObj);
  axios
    .post(
      "https://crudcrud.com/api/47698c601bb3453eac50678967d98428/appointmentData",
      myObj
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.error(err));
}

function showUserOnScreen(myObj) {
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
  li.appendChild(
    document.createTextNode(`${myObj.name} - ${myObj.email} - ${myObj.phone}`)
  );
  li.appendChild(button);
  li.appendChild(editBtn);
  li.className = "list-group-items";
  if (ulist) {
    ulist.appendChild(li);
  }
  button.addEventListener("click", function (e) {
    let li = e.target.closest("li");
    if (li) {
      localStorage.removeItem(myObj.email);
      ulist.removeChild(li);
    }
  });
  editBtn.onclick = (e) => {
    let li = e.target.closest("li");
    if (li) {
      localStorage.removeItem(myObj.email);
      document.getElementById("name").value = myObj.name;
      document.getElementById("email").value = myObj.email;
      document.getElementById("phone").value = myObj.phone;
      ulist.removeChild(li);
    }
  };
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/47698c601bb3453eac50678967d98428/appointmentData"
    )
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
      console.log(response.data);
    })
    .catch((err) => console.error(err));
});
