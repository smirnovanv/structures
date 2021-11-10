import { Stack } from './stack.js';

class TwoStackQueue {
    #stackOne;
    #stackTwo;

    constructor() {
        this.#stackOne = new Stack();
        this.#stackTwo = new Stack();
    }

    add(dataUnit) {
        let currentUnit;
        while (currentUnit = this.#stackTwo.poll()) {
            this.#stackOne.add(currentUnit);
        }

        this.#stackOne.add(dataUnit); 
    }

    poll() {
        let currentUnit;
        while (currentUnit = this.#stackOne.poll()) {
            this.#stackTwo.add(currentUnit);
        }
        return this.#stackTwo.poll();
    }

    showStatus() {
        let currentUnit;
        while (currentUnit = this.#stackTwo.poll()) {
            this.#stackOne.add(currentUnit);
        }

        return this.#stackOne.showStatus();
    }
}

export { TwoStackQueue };
