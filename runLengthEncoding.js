//   ("aaab") [] k2

var runLengthEncoding = function (str) {
  let k = 1;
  const arr = str.split("").reduce((acc, curr, index, arr) => {
    if (curr === arr[index + 1]) {
      k++;
      return acc;
    }

    //   arr[i] === arr[i-1] k ++
    let newArr = [...acc, [curr, k]];
    k = 1;
    return newArr;
  }, []);

  return [arr]; // << fix this
};
console.log(runLengthEncoding("kaaabb"))
