import menuItemTemplate from '../../templates/menuItem.hbs';
import data from '../../data/menu.json5'
import '../../assets/images/green-tea-latte.jpg';
import '../../assets/images/herbal-tea.jpg';
import '../../assets/images/loose-leaf-tea.jpg';
import '../../assets/images/pastry.jpg';

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