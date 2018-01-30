import Template from '../Template';
import html from './app.html';
import './app.css';
import '../pages/pages.css';
import { removeChildren } from '../dom';
import Header from './Header';
import Page1 from '../pages/page1/Page1';
import Page2 from '../pages/page2/Page2';
import Page3 from '../pages/page3/Page3';
import Page4 from '../pages/page4/Page4';

const template = new Template(html);

const map = new Map();
map.set('#page1', Page1);
map.set('#page2', Page2);
map.set('#page3', Page3);
map.set('#page4', Page4);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || Page1;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }

  render() {
    const dom = template.clone();   

    dom.querySelector('header').appendChild(new Header().render());

    this.footer = dom.querySelector('#footer');
    this.header = dom.querySelector('#header');
    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}
