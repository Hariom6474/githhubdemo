function getFormValue(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  let myObj = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time,
  };
  localStorage.setItem("myObj", JSON.stringify(myObj));
  // deserialized can be used if we had to change the value
  let deserialized = JSON.parse(JSON.stringify(myObj));
  console.log(deserialized);
}
