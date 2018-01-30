import html from './header.html';
import './header.css';
import Template from '../Template';

const template = new Template(html);

export default class Header{
  
  render(){
    const dom = template.clone();

    // const checkbox = dom.querySelector('input');
    // this.menu = dom.querySelector('ul');
    
    // this.menu.addEventListener('click', event => {   
    //   event.preventDefault();  
    //   checkbox.checked = false;
    // });

    return dom;
  }
  
}