window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    // image.drawImage();
    game.start();
  }
  
  let requestID = null;
  let game = {
    start : function startGame() {
      // this.canvas.width = 270;
      // this.canvas.height = 480;
      // this.context = this.canvas.getContext("2d");
      // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      // requestID = window.requestAnimationFrame(updateGameArea)
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      let image = new Image();
      image.src = './images/road.png';
      image.onload = function () {
        context.drawImage(image, 200, 200);
      }
      let imageCar = new Image();
      imageCar.src = './images/car.png';
      imageCar.onload = function () {
        context.drawImage(imageCar, 320, 550, 40, 70);
      }
  }
};

class Carro{
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
   // new speed properties
    this.speedX = 0;
    this.speedY = 0;

    this.newImage = new Image();
    this.newImage.src = './images/car.png';

    this.image = new Image();
    this.image.src = './images/road.png';

  }


    update(ctx) {
      ctx.drawImage(this.image, 200, 200)
      ctx.drawImage(this.newImage, this.x, this.y, this.width, this.height);
    }
  }

  let newCar = new Carro();

  function updateGameArea() {
    myGameArea.clear();
    // player.newPos();
    newCar.update();
    // update the obstacles array
    // updateObstacles();
    requestID = window.requestAnimationFrame(updateGameArea)
    // checkGameOver();
    // myGameArea.score();
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        newCar.x -= 1;
        break;
      case 39: // right arrow
        newCar.x += 1;
        break;
    }
  };
  //deixar de apertar tecla

// var myGameArea = {
//   canvas: document.createElement("canvas"),
//   frames: 0,

//   clear: function() {
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   },
//   stop: function() {
//       // clearInterval(this.interval);
//       window.cancelAnimationFrame(requestID)
//     },
//   score: function() {
//     var points = Math.floor(this.frames / 5);
//     this.context.font = "18px serif";
//     this.context.fillStyle = "black";
//     this.context.fillText("Score: " + points, 350, 50);
//     }
// };

// class Component {
//   constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;

//    // new speed properties
//     this.speedX = 0;
//     this.speedY = 0;
//   }
 
//   move () {
//     var ctx = myGameArea.context;
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// var carro = new Component (10, 10, 'red', 0, 110)


// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 37: // left arrow
//       player.speedX -= 1;
//       break;
//     case 39: // right arrow
//       player.speedX += 1;
//       break;
//   }
// };
// //deixar de apertar tecla
// document.onkeyup = function(e) {
//   player.speedX = 0;
//   player.speedY = 0;
// };


// function updateObstacles() {
//   for (i = 0; i < myObstacles.length; i++) {
//       myObstacles[i].y += -1;
//       myObstacles[i].update();
//     }
//   myGameArea.frames += 1;
//   if (myGameArea.frames % 120 === 0) {
//     var y = myGameArea.canvas.width;
//     var minwidth = 20;
//     var maxwidth = 200;
//     var width = Math.floor(
//       Math.random() * (maxwidth - minwidth + 1) + minwidth
//     );
//     var minGap = 50;
//     var maxGap = 200;
//     var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     myObstacles.push(new Component(10, width, "green", y, 0));
//     myObstacles.push(
//       new Component(10, y - width - gap, "green", y, width + gap)
//     );
//   }
// }