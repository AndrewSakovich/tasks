var WordDictionary = function () {
  this.arr = [];
};

WordDictionary.prototype.addWord = function (word) {
  console.log("hello 1111", this);
  console.log(this.arr);
  this.arr = [...this.arr, word];
};

WordDictionary.prototype.search = function (word) {
  console.log("hello  2222", this);

  const arrWord = word.split("");
  let arrIndex = [];

  arrWord.forEach((item, index, arr) => {
    if (item === ".") {
      arrIndex = [...arrIndex, index];
    }
  });

  arrWord = word.split("").filter((item, index, arr) => {
    return item != ".";
  });

  newWord = arrWord.join("");

  this.arr.forEach((item, index, arr) => {
    newItem = item.split("");

    arrIndex.forEach((item, index, arr) => {
      newItem.splice(item, 1);
    });
  });

  const res = this.arr.find((item, index, arr) => {
    return item === word;
  });

  return !!res;
};

// const a = new WordDictionary()
const b = new WordDictionary();

b.search("hello");
b.addWord("hell");
b.addWord("addd");
b.addWord("hello");
console.log(b.search("he..o"));
