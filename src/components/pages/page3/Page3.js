import html from './page3.html';
import Template from '../../Template';

const template = new Template(html);

export default class Page3 {

  render() {
    const dom = template.clone();

    return dom;
  }
}