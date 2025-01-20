import menuItemTemplate from '../templates/menuItem.hbs';
import data from '../data/menu.json5'
import '../menu/images/green-tea-latte.jpg';
import '../menu/images/herbal-tea.jpg';
import '../menu/images/loose-leaf-tea.jpg';
import '../menu/images/pastry.jpg';

const MenuComponent = () => {
  const body = document.createElement('div');
  body.classList.add('menu')
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  body.appendChild(heading);

  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-list')
  menuItems.innerHTML = menuItemTemplate(data);
  body.appendChild(menuItems);

  return body;
};

export default MenuComponent;