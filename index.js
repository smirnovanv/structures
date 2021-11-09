import { Queue } from './queue.js';
import { StrangeQueue } from './strangeQueue.js';

const queue = new Queue();

queue.add('item 1');

queue.add('item 2');

queue.add('item 3');

queue.remove();

queue.add('item 4');

console.log(queue.showStatus());


const strange = new StrangeQueue();

strange.add('item 1');

strange.add('item 2');

strange.add('item 3');

strange.remove();

strange.add('item 4');

console.log(strange.showStatus());
