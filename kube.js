class Cube {
    constructor(length){

        this.length = length
       
       
    
    }

    get surfaceArea() {
        return  this.length*this.length*6
    }

    set surfaceArea(numb){
        this._surfaceArea = numb
        this._length = (numb/6)/numb
    }

   get volume() {
    return this.length*this.length*this.length
   }


    set volume(numb){
        this._volume = numb
        this._length = (numb/this.length)/this.length
    }


}

const test1 = new Cube(2)

console.log(test1.surfaceArea)

