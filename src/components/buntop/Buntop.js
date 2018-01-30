import html from './buntop.html';
import './buntop.css';
import Template from '../Template';

const template = new Template(html);

export default class Buntop {

  render() {
    const dom = template.clone();

    return dom;
  }
}