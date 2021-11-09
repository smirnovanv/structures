import { Stack } from './stack.js';

class StrangeQueue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(dataUnit) {
        while (this.stackTwo.data.length !== 0) {
            const currentUnit = this.stackTwo.remove();
            this.stackOne.add(currentUnit);
        }

        this.stackOne.add(dataUnit); 
    }

    remove() {
        while (this.stackOne.data.length !== 0) {
            const currentUnit = this.stackOne.remove();
            this.stackTwo.add(currentUnit);
        }
        this.stackTwo.remove();
    }

    showStatus() {
        while (this.stackTwo.data.length !== 0) {
            const currentUnit = this.stackTwo.remove();
            this.stackOne.add(currentUnit);
        }

        return this.stackOne.data;
    }
}

export { StrangeQueue };
