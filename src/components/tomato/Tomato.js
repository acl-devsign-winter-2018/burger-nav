import html from './tomato.html';
import './tomato.css';
import Template from '../Template';

const template = new Template(html);

export default class Tomato {

  render() {
    const dom = template.clone();

    return dom;
  }
}