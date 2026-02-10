function savePerson() {
  const fname = document.getElementById("fname").value;
  const mname = document.getElementById("mname").value;
  const lname = document.getElementById("lname").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  if (!fname || !lname || !age || !email) {
    alert("Please fill in required fields.");
    return;
  }

  const tableBody = document.getElementById("tableBody");
  const row = tableBody.insertRow();

  row.insertCell(0).innerText = fname;
  row.insertCell(1).innerText = mname;
  row.insertCell(2).innerText = lname;
  row.insertCell(3).innerText = age;
  row.insertCell(4).innerText = email;

  document.querySelectorAll("input").forEach(input => input.value = "");
}

