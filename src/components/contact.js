const ContactComponent = () => {
  const body = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';
  body.appendChild(heading);

  const location = document.createElement('div');
  location.innerHTML = '<p>123 Main Street, Anytown, USA</p>' +
                       '<p>Phone: (123) 456-7890</p>' +
                       '<p>Email: contact@restaurant.com</p>';
  
  // create a contact form using html
  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailLabel.appendChild(emailInput);
  form.appendChild(emailLabel);

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';
  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageLabel.appendChild(messageTextarea);
  form.appendChild(messageLabel);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  body.appendChild(location);
  body.appendChild(form);

  return body;
}

export default ContactComponent;