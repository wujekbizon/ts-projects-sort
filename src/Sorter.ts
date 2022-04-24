export class Sorter {
  constructor(public collection: /* add class  fix this*/) {} 

  // create sort method
  sort(): void {
    const { length } = this.collection;

    // Sorting implementation
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
      
        if (this.collection[j] > this.collection[j + 1]) {
            // if is greater then swap two elements
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
        }
      }  
    }
  }
}
