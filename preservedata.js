const form = document.querySelector('#contact-input');
const store = [];
form.addEventListener('input', (ev) => {
  ev.preventDefault();
  const data = {
    id: Date.now,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  store.push(data);
  localStorage.setItem('InputData', JSON.stringify(data));
});
const retrivedata = localStorage.getItem('InputData');
const getdata = JSON.parse(retrivedata);
window.addEventListener('load', () => {
  if (localStorage.getItem('InputData')) {
    document.getElementById('name').value = getdata.name;
    document.getElementById('email').value = getdata.email;
    document.getElementById('message').value = getdata.message;
  }
});