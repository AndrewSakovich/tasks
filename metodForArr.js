var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function () {
  return this.map((item) => {
    return item * item;
  });
};

console.log(numbers.square());

const newArr = [5, 3, 4, 1];


Array.prototype.cube = function () {
    return this.map((item) => {
        console.log(this)
        return item * item * item
    })
}

const res = newArr.cube();
console.log('res',  res)


