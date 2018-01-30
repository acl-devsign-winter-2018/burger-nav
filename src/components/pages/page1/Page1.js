import html from './page1.html';
import Template from '../../Template';

const template = new Template(html);

export default class Page1 {

  render() {
    const dom = template.clone();

    return dom;
  }
}