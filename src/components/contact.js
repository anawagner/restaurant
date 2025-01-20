const ContactComponent = () => {
  const body = document.createElement('div');
  body.className = 'contact';
  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';
  body.appendChild(heading);

  const location = document.createElement('div');
  location.innerHTML = '<p>123 Main Street, Anytown, USA</p>' +
                       '<p>Phone: (123) 456-7890</p>' +
                       '<p>Email: contact@restaurant.com</p>';
  

  const form = document.createElement('form');
  const fields = [
    { name: 'name', type: 'text', label: 'Name:' },
    { name: 'email', type: 'email', label: 'Email:' },
    { name: 'message', type: 'textarea', label: 'Message:' }
  ];

  fields.forEach(field => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field';

    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = field.label;

    let fieldInput;
    if (field.type === 'textarea') {
      fieldInput = document.createElement('textarea');
    } else {
      fieldInput = document.createElement('input');
      fieldInput.type = field.type;
    }
    fieldInput.name = field.name;

    // fieldLabel.appendChild(fieldInput);
    fieldDiv.appendChild(fieldLabel);
    fieldDiv.appendChild(fieldInput);
    form.appendChild(fieldDiv);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  body.appendChild(location);
  body.appendChild(form);

  return body;
}

export default ContactComponent;