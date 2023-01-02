let cx = 400;

function setup() {
  createCanvas(cx, cx);
}

function draw() {
  background("white");
  mondarian();
}

function mondarian() {
  let redSize = 183 / 400 * cx;
  let blueSize = 120 / 400 * cx;
  let yellowHeight = 50;
  let yellowWidth = 
  strokeWeight(5);
  fill("red");
  square(0, 0, redSize);
  fill("blue");
  square(redSize, 250, blueSize);
  fill("yellow");
  rect(0, 250, 50, 150);
  line(0, redSize, cx, 183);
  line(0, 250, cx, 250);
  line(redSize, 0, redSize, cx);
}
