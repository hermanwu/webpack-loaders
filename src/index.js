// ./ = current directory
//const sum = require('./sum');
import sum from './sum';

// no export in this file;
import './image_viewer';

const total = sum(10, 5);

console.log(total);