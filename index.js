function getFormValue(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('date', date);
  localStorage.setItem('time', time);
}
