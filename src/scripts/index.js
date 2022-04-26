import 'regenerator-runtime'; // for async await transpile
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skeleton.css';
import '../styles/loader.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu_toggle'),
  drawer: document.querySelector('#drawer'),
  maincontent: document.querySelector('main'),
  jumbotron: document.querySelector('.jumbotron'),
  titlemain: document.querySelector('.titlemain'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
