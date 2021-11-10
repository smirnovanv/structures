class Stack {
    #data;

    constructor() {
        this.#data = [];
    }

    add(dataUnit) {
        this.#data.push(dataUnit);
    }

    poll() {
       return this.#data.pop();
    }

    showStatus() {
        return this.#data;
    }
}

export { Stack };
