
var runLengthEncoding = function (str) {
  console.log(str);
  let k = 1;
  const arr = str.split("").reduce((acc, curr, index, arr) => {
    if (curr === arr[index + 1]) {
      k++;
    
      return acc;
    }

    const newArr = [...acc, [k, curr]];
    k = 1;
    return newArr;
  }, []);

  return arr;
};
