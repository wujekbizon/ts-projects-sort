"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    // create sort method
    sort() {
        const { length } = this.collection;
        // Sorting implementation
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // if collection is an array of numbers
                // set a type guard for number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        // if is greater then swap two elements
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // if collection is a string, do this logic instead:
                // set a type guard for string
                // if (typeof this.collection === 'string') {
                // }
            }
        }
    }
}
const sorter = new Sorter([27, 10, 0, -3, -67, 45, 134, 6, 0.5]);
sorter.sort();
console.log(sorter.collection);
