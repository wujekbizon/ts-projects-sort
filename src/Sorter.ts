import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  // create sort method
  sort(): void {
    const { length } = this.collection;

    // Sorting implementation
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          // if is greater then swap two elements
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
