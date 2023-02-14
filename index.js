// Create a canvas element and set its 2D context.
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

// Set the width and height of the canvas.
canvas.width = 144;
canvas.height = 256;

// Add the canvas element to the body of the HTML document.
document.body.appendChild(canvas);

// Background image variables.
var bgReady = false;
var bgImage = new Image();

// Set the background image's onload event to set bgReady to true.
bgImage.onload = function () {
  bgReady = true;
};

// Set the source of the background image.
bgImage.src = "images/background.png";

// Bird image variables.
var birdReady = false;
var birdImage = new Image();

// Set the bird image's onload event to set birdReady to true.
birdImage.onload = function () {
  birdReady = true;
};

// Set the source of the bird image.
birdImage.src = "images/bird.png";

// First upper bar variables.
var upper1Ready = false;
var upper1Image = new Image();

// Set the onload event for the first upper bar image to set upper1Ready to true.
upper1Image.onload = function () {
  upper1Ready = true;
};

// Set the source for the first upper bar image.
upper1Image.src = "images/upper.png";

// Second upper bar variables.
var upper2Ready = false;
var upper2Image = new Image();

// Set the onload event for the second upper bar image to set upper2Ready to true.
upper2Image.onload = function () {
  upper2Ready = true;
};

// Set the source for the second upper bar image.
upper2Image.src = "images/upper.png";

// Third upper bar variables.
var upper3Ready = false;
var upper3Image = new Image();

// Set the onload event for the third upper bar image to set upper3Ready to true.
upper3Image.onload = function () {
  upper3Ready = true;
};

// Set the source for the third upper bar image.
upper3Image.src = "images/upper.png";

// First lower bar variables.
var lower1Ready = false;
var lower1Image = new Image();

// Set the onload event for the first lower bar image to set lower1Ready to true.
lower1Image.onload = function () {
  lower1Ready = true;
};

// Set the source for the first lower bar image.
lower1Image.src = "images/lower.png";

// Second lower bar variables.
var lower2Ready = false;
var lower2Image = new Image();

// Set the onload event for the second lower bar image to set lower2Ready to true.
lower2Image.onload = function () {
  lower2Ready = true;
};

// Set the source for the second lower bar image.
lower2Image.src = "images/lower.png";

// Third lower bar variables.
var lower3Ready = false;
var lower3Image = new Image();

// Set the onload event for the third lower bar image to set lower3Ready to true.
lower3Image.onload = function () {
  lower3Ready = true;
};

// Set the source for the third lower bar image.
lower3Image.src = "images/lower.png";

// Define the bird object that contains the speed, acceleration, position and score of the bird.
var bird = {
  // X-axis speed.
  xspeed: 0,
  // Y-axis speed.
  yspeed: 0,
  // X-axis acceleration.
  xacc: 0,
  // Y-axis acceleration.
  yacc: 200,
  // X-axis position.
  x: 2,
  // Y-axis position.
  y: 2,
  // Score of the bird.
  score: 0,
};

// Define the objects for the upper and lower pipes

var upper1 = {
  // Speed of the upper pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the upper pipe.
  x: 20,
  // Y-axis position of the upper pipe.
  y: -100,
};

var upper2 = {
  // Speed of the upper pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the upper pipe.
  x: 75,
  // Y-axis position of the upper pipe.
  y: -50,
};

var upper3 = {
  // Speed of the upper pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the upper pipe.
  x: 130,
  // Y-axis position of the upper pipe.
  y: -70,
};

var lower1 = {
  // Speed of the lower pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the lower pipe.
  x: 20,
  // Y-axis position of the lower pipe.
  y: 150,
};

var lower2 = {
  // Speed of the lower pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the lower pipe.
  x: 75,
  // Y-axis position of the lower pipe.
  y: 135,
};

var lower3 = {
  // Speed of the lower pipe in the x-axis.
  xspeed: -30,
  // X-axis position of the lower pipe.
  x: 130,
  // Y-axis position of the lower pipe.
  y: 160,
};

// This code sets up the keydown and keyup event listeners to listen for user inputs
// "keysDown" is an object that keeps track of the keys that are currently pressed down
// When a key is pressed down, it adds the keyCode of the key to the "keysDown" object
// When the key is released, it deletes the keyCode from the "keysDown" object
// and sets the "f" variable to 0.

var keysDown = {};
//adding key listeners
addEventListener(
  "keydown",
  function (e) {
    keysDown[e.keyCode] = true;
  },
  false
);

addEventListener(
  "keyup",
  function (e) {
    delete keysDown[e.keyCode];
    f = 0;
  },
  false
);

// The 'reset' function resets the values of the bird object to their original values.
// The 'difficulty' variable is being used to set the initial difficulty of the game
// and is subtracted from the y-coordinate of the pipes.
// This variable can be adjusted to increase or decrease the difficulty of the game.

var reset = function () {
  bird.xspeed = 0;
  bird.yspeed = 0;
  bird.x = 0;
  bird.y = 120;
  bird.score = 0;
};
var f = 0;
var difficulty = -40;

// The update function updates the position of the bird,
// as well as the upper and lower obstacles.
// The position of the bird is updated based on its current speed and acceleration,
// and the position of the obstacles is updated based on their current speed.

// The function also includes collision detection,
// where the game is reset if the bird hits the ground or any of the obstacles.

// function that is called a lot
var update = function (modifier) {
  bird.score += modifier;
  if (38 in keysDown && f == 0) {
    // Player holding up
    bird.yspeed = -100;
    f = 1;
  }
  bird.x += bird.xspeed * modifier;
  bird.y += bird.yspeed * modifier;
  bird.xspeed += bird.xacc * modifier;
  bird.yspeed += bird.yacc * modifier;
  upper1.x = upper1.x + upper1.xspeed * modifier;
  upper2.x = upper2.x + upper2.xspeed * modifier;
  upper3.x = upper3.x + upper3.xspeed * modifier;
  lower1.x = lower1.x + lower1.xspeed * modifier;
  lower2.x = lower2.x + lower2.xspeed * modifier;
  lower3.x = lower3.x + lower3.xspeed * modifier;
  if (upper1.x < -25) {
    upper1.y = difficulty + 10 - Math.random() * 50;
    upper1.x = 144;
  }
  if (upper2.x < -25) {
    upper2.x = 144;
    upper2.y = difficulty + 10 - Math.random() * 50;
  }
  if (upper3.x < -25) {
    upper3.x = 144;
    upper3.y = difficulty + 10 - Math.random() * 50;
  }
  if (lower1.x < -25) {
    lower1.y = -difficulty + 160 - Math.random() * 50;
    lower1.x = 144;
  }
  if (lower2.x < -25) {
    lower2.x = 144;
    lower2.y = -difficulty + 160 - Math.random() * 50;
  }
  if (lower3.x < -25) {
    lower3.x = 144;
    lower3.y = -difficulty + 160 - Math.random() * 50;
  }
  //collision detection
  if (bird.y > 256) reset();
  if (upper1.x < 15 && bird.y < upper1.y + 135) reset();
  if (upper2.x < 15 && bird.y < upper2.y + 135) reset();
  if (upper3.x < 15 && bird.y < upper3.y + 135) reset();
  if (upper1.x < 15 && bird.y < upper1.y + 135) reset();
  if (upper2.x < 15 && bird.y < upper2.y + 135) reset();
  if (upper3.x < 15 && bird.y < upper3.y + 135) reset();
  if (lower1.x < 15 && bird.y > lower1.y - 10) reset();
  if (lower2.x < 15 && bird.y > lower2.y - 10) reset();
  if (lower3.x < 15 && bird.y > lower3.y - 10) reset();
};

// The render function is responsible for rendering or
// drawing the different elements of the game,
// such as the background, the bird, and the pipes, on the canvas.

// It uses the drawImage method of the 2D rendering context (ctx)
// to render each of the elements, using their corresponding ready state.
// The ready state of each image is represented by a boolean flag,
// such as bgReady, birdReady, etc. If the ready state of an image is true,
// that means the image is loaded and ready to be rendered.

// The render function also renders the score of the game
// by using the fillText method of the 2D rendering context.
// The score is displayed in the top-left corner of the canvas with a white font color.

var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (birdReady) {
    ctx.drawImage(birdImage, bird.x, bird.y);
  }
  if (upper1Ready) {
    ctx.drawImage(upper1Image, upper1.x, upper1.y);
  }
  if (upper2Ready) {
    ctx.drawImage(upper2Image, upper2.x, upper2.y);
  }
  if (upper3Ready) {
    ctx.drawImage(upper3Image, upper3.x, upper3.y);
  }
  if (lower1Ready) {
    ctx.drawImage(lower1Image, lower1.x, lower1.y);
  }
  if (lower2Ready) {
    ctx.drawImage(lower2Image, lower2.x, lower2.y);
  }
  if (upper3Ready) {
    ctx.drawImage(lower3Image, lower3.x, lower3.y);
  }
  // Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("score: " + bird.score, 12, 32);
};

// This is the main loop of the game.
// The main function uses the Date.now() method
// to calculate the time passed between each frame.
// This value is stored in the delta variable,
// which is used to update the game state.

// The update function is called to update the game logic,
// and the render function is called to draw the game on the screen.
// The reset function is called once before the main function is executed
// to initialize the game state.

// The requestAnimationFrame method is used to schedule the next call to the main function,
// ensuring that the game runs at a smooth and consistent rate.
// The then variable is used to store the time of the previous frame
// and is updated in each iteration of the loop.

// the main loop of the game
var main = function () {
  var now = Date.now();
  var delta = now - then;
  update(delta / 1000);
  render();
  then = now;
  requestAnimationFrame(main);
};
var then = Date.now();
reset();
main();
