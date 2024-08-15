const MenuComponent = () => {
  const welcomeMessage = 'Menu';
  const home = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = welcomeMessage;
  home.appendChild(h1);
  return home;
}

export default MenuComponent;