import html from './lettuce.html';
import './lettuce.css';
import '../home/slide.css';
import Template from '../Template';

const template = new Template(html);

export default class Lettuce {

  render() {
    const dom = template.clone();

    return dom;
  }
}