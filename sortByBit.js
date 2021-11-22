const arr = [3, 8, 3, 6, 5, 7, 9, 1];

function sortByBit(arr) {
  const getCount = (binareStr) => {
    let examStr = 0

    for ( let numb of binareStr) {
      if (numb === "1") {
        examStr++;
      }
    }

    return examStr ;
  };

  arr.sort((a, b) => {
    const binareA = a.toString(2);
    const binareB = b.toString(2);
   
    let examA =  getCount(binareA);
    let examB =  getCount(binareB);

    if (examA === examB){
        return a-b
    }
  
    
    return examA - examB;
  });
}

sortByBit(arr);
console.log(arr);
