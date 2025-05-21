class CounterService {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    get() {
        return this.value;
    }

    increment() {
        return ++this.value;
    }

    decrement() {
        return --this.value;
    }
}

module.exports = CounterService;
