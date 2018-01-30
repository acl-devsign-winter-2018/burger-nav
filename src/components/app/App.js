import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from '../header/Header';
import Home from '../home/Home';
import BunTop from '../buntop/BunTop';
import Lettuce from '../lettuce/Lettuce';
import Tomato from '../tomato/Tomato';
import Cheese from '../cheese/Cheese';
import Beef from '../beef/Beef';
import Onions from '../onions/Onions';
import BunBottom from '../bunbottom/BunBottom';
import Footer from '../footer/Footer.js';
import { removeChildren } from '../dom';

const template = new Template(html);

// Hash Navigation
const map = new Map();
map.set('#bun-top', BunTop);
map.set('#lettuce', Lettuce);
map.set('#tomato', Tomato);
map.set('#cheese', Cheese);
map.set('#beef', Beef);
map.set('#onions', Onions);
map.set('#bun-bottom', BunBottom);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }
  
  setPage() {
    const Component = map.get(window.location.hash) || Home;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }

  render() {
    const dom = template.clone();   
      
    dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('footer').appendChild(new Footer().render());

    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}