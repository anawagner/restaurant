const AboutComponent = () => {
  const body = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'About Us';
  body.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.textContent = 'We are a restaurant that serves delicious food and drinks.'
    + ' We are located in the heart of the city.';

  body.appendChild(paragraph)
  return body;
}

export default AboutComponent;