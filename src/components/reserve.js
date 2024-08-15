const ReserveComponent = () => {
  const body = document.createElement('div');
  const heading = document.createElement('h1')
  heading.textContent = 'Reserve a Table';
  body.appendChild(heading);


  const form = document.createElement('form');

  // Date input
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.required = true;
  form.appendChild(dateInput);

  // Time input
  const timeInput = document.createElement('input');
  timeInput.type = 'time';
  timeInput.name = 'time';
  timeInput.required = true;
  form.appendChild(timeInput);

  // Number of people input
  const numberOfPeopleInput = document.createElement('input');
  numberOfPeopleInput.type = 'number';
  numberOfPeopleInput.name = 'numberOfPeople';
  numberOfPeopleInput.required = true;
  form.appendChild(numberOfPeopleInput);

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  body.appendChild(form);
  return body;
}

export default ReserveComponent;