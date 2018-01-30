import html from './onions.html';
import './onions.css';
import Template from '../Template';

const template = new Template(html);

export default class Onions {

  render() {
    const dom = template.clone();

    return dom;
  }
}