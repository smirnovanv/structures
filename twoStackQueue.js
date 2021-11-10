import { Stack } from './stack.js';

class TwoStackQueue {
    #stackOne;
    #stackTwo;

    constructor() {
        this.#stackOne = new Stack();
        this.#stackTwo = new Stack();
    }

    add(dataUnit) {
        while (this.#stackTwo.showStatus().length !== 0) {
            const currentUnit = this.#stackTwo.remove();
            this.#stackOne.add(currentUnit);
        }

        this.#stackOne.add(dataUnit); 
    }

    remove() {
        while (this.#stackOne.showStatus().length !== 0) {
            const currentUnit = this.#stackOne.remove();
            this.#stackTwo.add(currentUnit);
        }
        return this.#stackTwo.remove();
    }

    showStatus() {
        while (this.#stackTwo.showStatus().length !== 0) {
            const currentUnit = this.#stackTwo.remove();
            this.#stackOne.add(currentUnit);
        }

        return this.#stackOne.showStatus();
    }
}

export { TwoStackQueue };
