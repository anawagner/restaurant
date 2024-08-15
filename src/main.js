import './styles/main.css';
import './styles/reset.css';
import { HeaderComponent, NavigationComponent } from './components/header';
import HomeComponent from './components/home';
import AboutComponent from './components/about';
import MenuComponent from './components/menu';
import ContactComponent from './components/contact';
import ReserveComponent from './components/reserve';
import FooterComponent from './components/footer';

function main(root, initialHash) {
  const navItems = [
    {name: 'Home', component: HomeComponent}, 
    {name: 'Menu', component: MenuComponent}, 
    {name: 'About', component: AboutComponent},
    {name: 'Contact', component: ContactComponent},
    {name: 'Reserve', component: ReserveComponent},
  ];

  // create the page layout (header, content, footer)
  const header = HeaderComponent('Restaurant');
  const nav = NavigationComponent(navItems);
  header.appendChild(nav);

  root.appendChild(header);
  const contentElement = document.createElement('main');
  root.appendChild(contentElement);
  contentElement.appendChild(navItems[0].component());
  root.appendChild(FooterComponent());

  // handle navigation
  nav.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'LI') {
      return;
    } 
    const nav_id = e.target.id;
  
    contentElement.innerHTML = '';
    try {
      contentElement.appendChild(navItems[nav_id].component());
    } catch (error) {
      contentElement.appendChild(HomeComponent());
      console.log('click event listener error: ', error);
    }
  });
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    loadHashToContent(navItems, hash, contentElement);
  });
  if (initialHash) {
    loadHashToContent(navItems, initialHash, contentElement);
  }
}

const loadHashToContent = (navItems, hash, content) => {
  const itemName = hash.replace('#', '');
  const nav_id = navItems.findIndex((item) => item.name.toLowerCase() === itemName);
  content.innerHTML = '';
  content.appendChild(navItems[nav_id].component());
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const initialHash = window.location.hash;
  main(root, initialHash);
});

