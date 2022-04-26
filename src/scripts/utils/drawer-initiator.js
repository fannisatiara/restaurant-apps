const DrawerInitiator = {
  init({
    button, drawer, maincontent, jumbotron, titlemain,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    maincontent.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    jumbotron.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    titlemain.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
