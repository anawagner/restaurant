const Header = (title, navItems) => {
  const HeaderElement = document.createElement('header');
  const titleElement = document.createElement('h1');
  titleElement.textContent = title;

  HeaderElement.appendChild(titleElement);
  HeaderElement.appendChild(Navigation(navItems));
  return HeaderElement;
}

const Navigation = (navItems) => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  navItems.forEach((item, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.name;
    a.id = index;
    a.href = `#${item.name.toLowerCase()}`;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

export default Header;