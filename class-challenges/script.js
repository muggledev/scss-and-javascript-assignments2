class AlternatingPopper {
  constructor(array) {
    this.array = array;
    this.toggle = true;
  }

  method() {
    if (this.array.length === 0) return "";

    if (this.toggle) {
      this.toggle = false;
      return this.array.shift();
    } else {
      this.toggle = true;
      return this.array.pop();
    }
  }
}

const instance = new AlternatingPopper([1, 2, 3, 4, 5]);

console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
