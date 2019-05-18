import _ from 'lodash';
import './style.scss';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hellooo', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  //document.body.appendChild(component());