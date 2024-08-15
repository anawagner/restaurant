import menuItemTemplate from '../templates/menuItem.hbs';
import data from '../data/menu.json5'

const MenuComponent = () => {
  const body = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  body.appendChild(heading);

  const menuItems = document.createElement('div');
  menuItems.innerHTML = menuItemTemplate(data);
  body.appendChild(menuItems);

  return body;
};

export default MenuComponent;