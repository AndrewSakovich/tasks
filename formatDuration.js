let time = 360;
let resString = "";

const sec = 1;
const min = 60;
const hour = 60 * min;
const day = 24 * hour;
const year = 365 * day;

let arr = [
  {
    timeName: "year",
    timePeriod: year,
  },
  {
    timeName: "day",
    timePeriod: day,
  },
  {
    timeName: "hour",
    timePeriod: hour,
  },
  {
    timeName: "minte",
    timePeriod: min,
  },
  {
    timeName: "second",
    timePeriod: sec,
  },
];
arr.forEach(function callback(timeObj, index) {
  if (time >= timeObj.timePeriod) {
    const countPeriod = Math.floor(time / timeObj.timePeriod);

    const periodValue = `${countPeriod} ${timeObj.timeName}`;

    const correctedPeriodValue =
      countPeriod > 1 ? periodValue + "s " : periodValue;

    time = time % timeObj.timePeriod;
    const seporator = !time ? "and " : ", ";

    resString += !!resString
      ? seporator + correctedPeriodValue
      : correctedPeriodValue;
  }
});

console.log(resString);
