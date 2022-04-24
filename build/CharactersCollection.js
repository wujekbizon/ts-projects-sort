"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characterscollection = void 0;
class Characterscollection {
    constructor(data) {
        this.data = data;
    }
    // set getter
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        // update this.data with a new string
        this.data = characters.join('');
    }
}
exports.Characterscollection = Characterscollection;
