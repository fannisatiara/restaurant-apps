import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, maincontent, jumbotron, titlemain,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._maincontent = maincontent;
    this._jumbotron = jumbotron;
    this._titlemain = titlemain;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      maincontent: this._maincontent,
      jumbotron: this._jumbotron,
      titlemain: this._titlemain,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._maincontent.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
