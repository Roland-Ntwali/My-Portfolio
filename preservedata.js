// Store data in local storage
function storeData(data) {
  localStorage.setItem('storedData', JSON.stringify(data));
}

// Retrieve data from local storage
function retrieveData() {
  return JSON.parse(localStorage.getItem('storedData')) || {};
}
const form = document.getElementById('form');
const inputs = form.querySelectorAll('input');

// Autofill form fields with stored data
const storedData = retrieveData();
inputs.forEach((input) => {
  if (storedData[input.name]) {
    input.value = storedData[input.name];
  }
});

// Update stored data when input fields change
form.addEventListener('input', (event) => {
  const input = event.target;
  storedData[input.name] = input.value;
  storeData(storedData);
});
