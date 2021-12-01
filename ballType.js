var Ball = function (ballType='regular') {
  this.ballType = ballType;

  this.sayBallType = function () {
    return this.ballTipe;
  };
};


class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }

  sayBallType() {
    return this.ballType;
  }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);

console.log("%%%%%", ball1.sayBallType());
console.log("$$$$$", ball2.sayBallType());
