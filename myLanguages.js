function myLanguages(results) {
  const res = Object.entries(results)
    .filter(([key, value]) => value >= 60)
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      return 1;
    })
    .map((item) => {
      return item[0];
    });

  return res;
}

const results = {
  Java: 10,
  Ruby: 80,
  Python: 65,
};

console.log(myLanguages(results));
// const res = Object.entries(dict).filter(([key, value]) => value ===  "squeak").map(([key]) => key)
