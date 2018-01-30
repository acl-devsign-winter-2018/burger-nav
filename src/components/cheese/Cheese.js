import html from './cheese.html';
import './cheese.css';
import Template from '../Template';

const template = new Template(html);

export default class Cheese {

  render() {
    const dom = template.clone();

    return dom;
  }
}