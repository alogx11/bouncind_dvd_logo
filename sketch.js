let dvdLogo;
let x, y;
let xSpeed, ySpeed;
let speed;
let imgTint = [3];
function preload() {
  dvdLogo = loadImage("./assets/dvd_logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  speed = 5;
  xSpeed = speed;
  ySpeed = speed;
  imgTint = [255, 255, 255];
  x = 10;
  y = 10;
}

function draw() {
  background(0);
  drawImage();
}

function drawImage() {
  if (x > windowWidth - dvdLogo.width || x < 0) {
    xSpeed *= -1;
  }
  if (y > windowHeight - dvdLogo.height || y < 0) {
    ySpeed *= -1;
  }
  if (imgTint[1] == 255 && imgTint[2] == 255 && imgTint[0] != 0) {
    imgTint[0]--;
  } else if (imgTint[1] == 0 && imgTint[2] == 255 && imgTint[0] < 255) {
    imgTint[0]++;
  } else if (imgTint[0] == 0 && imgTint[2] == 255 && imgTint[1] != 0) {
    imgTint[1]--;
  } else if (imgTint[0] == 255 && imgTint[2] == 0 && imgTint[1] < 255) {
    imgTint[1]++;
  } else if (imgTint[0] == 255 && imgTint[1] == 0 && imgTint[2] != 0) {
    imgTint[2]--;
  } else {
    imgTint[2]++;
  }
  x += xSpeed;
  y += ySpeed;
  tint(imgTint[0], imgTint[1], imgTint[2]);
  image(dvdLogo, x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
