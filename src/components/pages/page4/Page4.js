import html from './page4.html';
import Template from '../../Template';

const template = new Template(html);

export default class Page4 {

  render() {
    const dom = template.clone();

    return dom;
  }
}