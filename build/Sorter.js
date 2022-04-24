"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // create sort method
    sort() {
        const { length } = this;
        // Sorting implementation
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    // if is greater then swap two elements
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
