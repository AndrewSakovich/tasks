class Song {
  constructor(title, artist, listeners = []) {
    this.title = title;
    this.artist = artist;
    this.listeners = listeners;
  }

  howMany(todayListeners) {
    const newArr = todayListeners.filter((todayItem) => {
      const oldListener = this.listeners.find((item, index, arr) => {
        return item.toUpperCase() === todayItem.toUpperCase();
      });

      if (!oldListener) {
        this.listeners = [...this.listeners, todayItem];
        return true;
      }
      return false;
    });

    console.log("newArr", newArr);

    console.log(this.listeners);

    return newArr.length;
  }
}

const song1 = new Song("title1", "artist1", ["lis1", "lis2", "lis3"]);
const day1 = song1.howMany(["lis1", "lis2", "lis3", "lis4", "lis5"]);
const day2 = song1.howMany(["lis1", "lis5", "lis8", 'LIS1']);
const day3 = song1.howMany(["lis1", "liS5", "LIS6"]);
;

console.log("day1", day1);
console.log("day2", day2);
console.log("day3", day3);
