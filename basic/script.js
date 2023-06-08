//Ex 1
function submitForm() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const age = document.getElementById('age').value;
  
  const fullName = `${firstname} ${lastname}`;

  let textClass = "";
  if (fullName.length > 5) {
      textClass = "green-text";
  } else {
      textClass = "red-text";
  }

  document.getElementById('displayDiv').innerHTML = `<p class="${textClass}">Name: ${fullName}, Age: ${age}</p>`;
}
