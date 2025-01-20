import text from '../data/text.json5';

const FooterComponent = () => {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = text.footer.text;
  footer.appendChild(p);
  return footer;
}

export default FooterComponent;