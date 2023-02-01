let student1 = {
  firstName: "Zeliq",
  lastName: "Shannon",
  age: 40,
  location: "Nakuru"
};
let student2 = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  location: "Nairobi"
};
let studentsList = [student1, student2];
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.style.background = "pink";
table.appendChild(tbody);
studentsList.forEach(function (student) {
  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  let locationCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
document.body.appendChild(table);