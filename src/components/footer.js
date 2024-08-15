const FooterComponent = () => {
  const textContent = 'page footer';
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = textContent;
  footer.appendChild(p);
  return footer;
}

export default FooterComponent;