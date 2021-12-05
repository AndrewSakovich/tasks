class File {
  constructor(fullName, content) {
    const index = fullName.lastIndexOf(".");
    this._fullName = fullName;
    this._fileName = this.fullName.slice(0, index);
    this._extension = this.fullName.slice(index + 1);
    this.content = content;
    console.log("constr Content", this.content);
    this._n = 0;
    this._k = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._fileName;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    console.log("getContents", this.content);
    return this.content;
  }
  write(str) {
    if (this.content) {
      return (this.content += `\n${str}`);
    }
    return (this.content += `${str}`);
  }

  gets() {
    const res = this.content.split("\n")[this._n];
    this._n++;
    return res;
  }

  getc() {
    const res = this.content.split("")[this._k];
    this._k++;

    return res;
  }
}
