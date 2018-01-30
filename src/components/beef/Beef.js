import html from './beef.html';
import './beef.css';
import Template from '../Template';

const template = new Template(html);

export default class Beef {

  render() {
    const dom = template.clone();

    return dom;
  }
}