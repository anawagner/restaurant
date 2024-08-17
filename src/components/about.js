import text from '../data/text.json5';
import page from '../templates/document.hbs';

const AboutComponent = () => {
  const body = document.createElement('div');
  body.classList.add('about');
  body.innerHTML = page(text.about);
  return body;
}

export default AboutComponent;