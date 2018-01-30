import html from './page2.html';
import Template from '../../Template';

const template = new Template(html);

export default class Page2 {

  render() {
    const dom = template.clone();

    return dom;
  }
}