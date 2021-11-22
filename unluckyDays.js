function unluckyDays(year) {
  const day = 13;
  let a = 0;
  for (let month = 1; month < 13; month++) {
    let exam = `${year} ${month} ${day}`;
    let date = new Date(exam);
    let friday = date.getDay();
    if (friday === 5) {
      a++;
    }
  }
  return a
}

console.log(unluckyDays(2017))
