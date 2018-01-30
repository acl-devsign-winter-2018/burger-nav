import html from './bunbottom.html';
import './bunbottom.css';
import '../home/slide.css';
import Template from '../Template';

const template = new Template(html);

export default class Bunbottom {

  render() {
    const dom = template.clone();

    return dom;
  }
}