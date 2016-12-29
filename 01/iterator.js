function IterateOnMultiples(arr, divisor) {
  this.cursor = 0;
  this.array = arr;
  this.divisor = divisor || 1;
}

IterateOnMultiples.prototype.next = function () {
  while (this.cursor < this.array.length) {
    var value = this.array[this.cursor++];
    if (value % this.divisor === 0) {
      return value;
    }
  }
};

IterateOnMultiples.prototype.hasNext = function () {
  var current = this.cursor;
  while (current < this.array.length) {
    if (this.array[current++] % this.divisor === 0) {
      return true;
    }
  }
  return false;
};

var consumer = new IterateOnMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

console.log(consumer.next(), consumer.hasNext()); // 3 true
console.log(consumer.next(), consumer.hasNext()); // 6 true
console.log(consumer.next(), consumer.hasNext()); // 9 false
