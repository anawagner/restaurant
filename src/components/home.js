const HomeComponent = () => {
  const welcomeMessage = 'Welcome to the Home Page';
  const home = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = welcomeMessage;
  home.appendChild(h1);
  return home;
}

export default HomeComponent;