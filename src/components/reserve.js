const ReserveComponent = () => {
  const body = document.createElement('div');
  body.className = 'reserve';
  const heading = document.createElement('h1')
  heading.textContent = 'Reserve a Table';
  body.appendChild(heading);


  const form = document.createElement('form');
  // Date input
  const dateField = document.createElement('div');
  dateField.className = 'field';

  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Date:';
  dateLabel.htmlFor = 'date';
  dateField.appendChild(dateLabel);

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.id = 'date';
  dateInput.required = true;
  dateField.appendChild(dateInput);

  form.appendChild(dateField);

  // Time input
  const timeField = document.createElement('div');
  timeField.className = 'field';

  const timeLabel = document.createElement('label');
  timeLabel.textContent = 'Time:';
  timeLabel.htmlFor = 'time';
  timeField.appendChild(timeLabel);

  const timeInput = document.createElement('input');
  timeInput.type = 'time';
  timeInput.name = 'time';
  timeInput.id = 'time';
  timeInput.required = true;
  timeField.appendChild(timeInput);

  form.appendChild(timeField);

  // Number of people input
  const numberOfPeopleField = document.createElement('div');
  numberOfPeopleField.className = 'field';

  const numberOfPeopleLabel = document.createElement('label');
  numberOfPeopleLabel.textContent = 'Number of People:';
  numberOfPeopleLabel.htmlFor = 'numberOfPeople';
  numberOfPeopleField.appendChild(numberOfPeopleLabel);

  const numberOfPeopleInput = document.createElement('input');
  numberOfPeopleInput.type = 'number';
  numberOfPeopleInput.name = 'numberOfPeople';
  numberOfPeopleInput.id = 'numberOfPeople';
  numberOfPeopleInput.required = true;
  numberOfPeopleField.appendChild(numberOfPeopleInput);

  form.appendChild(numberOfPeopleField);

  // Submit button
  const submitField = document.createElement('div');
  submitField.className = 'field';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitField.appendChild(submitButton);

  form.appendChild(submitField);

  body.appendChild(form);
  return body;
}

export default ReserveComponent;