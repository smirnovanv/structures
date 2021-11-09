class Queue {
    constructor() {
        this.data = [];
    }

    add(dataUnit) {
        this.data.push(dataUnit);
    }

    remove() {
        this.data.shift();
    }

    showStatus() {
        return this.data;
    }
}

export { Queue };
