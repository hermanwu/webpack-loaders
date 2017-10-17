/*
// ./ = current directory
//const sum = require('./sum');
import sum from './sum';

// no export in this file;
import './image_viewer';

const total = sum(10, 5);

console.log(total);
*/


const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    // reach to server to get the js file
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);