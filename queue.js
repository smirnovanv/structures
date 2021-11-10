class Queue {
    #data;

    constructor() {
        this.#data = [];
    }

    add(dataUnit) {
        this.#data.push(dataUnit);
    }

    poll() {
        const currentDataUnit = this.#data[1];
        this.#data.shift();
        return currentDataUnit;
    }

    showStatus() {
        return this.#data;
    }
}

export { Queue };
