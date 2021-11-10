import { Queue } from './queue.js';
import { TwoStackQueue } from './twoStackQueue.js';

const queue = new Queue();

queue.add('item 1');
queue.add('item 2');
queue.add('item 3');
queue.poll();
queue.add('item 4');

console.log(queue.showStatus());

const twoStackQueue = new TwoStackQueue();

twoStackQueue.add('item 1');
twoStackQueue.add('item 2');
twoStackQueue.add('item 3');
twoStackQueue.poll();
twoStackQueue.add('item 4');

console.log(twoStackQueue.showStatus());
