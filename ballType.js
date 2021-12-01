// var Ball = function (ballType) {};

class Ball {
  constructor(ballTipe = "regular") {
    this.ballTipe = ballTipe;
  }

  sayBallTipe() {
    if (!this.ballTipe) {
      return "regular";
    }
    return this.ballTipe;
  }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballTipe);

console.log("%%%%%", ball1.sayBallTipe());
console.log("$$$$$", ball2.sayBallTipe());
