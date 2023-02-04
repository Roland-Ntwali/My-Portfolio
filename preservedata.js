const contactForm = document.querySelector('#contactInput');

const contactDetails = {
  fullName: String,
  email: String,
  message: String,
};

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactDetails'));

  // populate the local storage information into the contact form
  if (contactData) {
    document.getElementById('name').value = contactData.fullName;
    document.getElementById('email').value = contactData.email;
    document.getElementById('message').value = contactData.message;
  }
};

contactForm.addEventListener('input', () => {
  contactDetails.fullName = document.getElementById('name').value;
  contactDetails.email = document.getElementById('email').value;
  contactDetails.message = document.getElementById('message').value;
  // set the local storage data with the upddated contact form
  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
});
