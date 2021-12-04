class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return this.length * this.length * 6;
  }

  set surfaceArea(numb) {
    this.length = Math.sqrt(numb / 6 );
  }

  get volume() {
    return this.length * this.length * this.length;
  }

  set volume(numb) {
    this.length = Math.cbrt(numb);
  }
}

const test1 = new Cube(2);

console.log(test1.surfaceArea);
