
var step = 50;
var half = step/2;
var inputString = "DOSANGMIN";


function setup() {
  var myCanvas = createCanvas(500, 500);
  noStroke();
  smooth();
  colorMode(RGB, width);
  frameRate(10);
}

function draw() {
  //console.log("X ", mouseX);
  //console.log("Y ", mouseY);
  background(0);
  // if mouse on the canvas
  if (mouseX > 0 & mouseX < width & mouseY > 0  & mouseY < height) paint();
}

function paint() {
  var counter = floor(map(mouseX + mouseY, 0, width + height, 0, inputString.length - 1)) ;
  for (var x = half; x <= width - half; x += step) {
    for (var y = 2*half; y <= width - half; y += step) {
      var c = color(mouseX, mouseY, 0);
      fill(c); 
      var up = y - random(0, half);
      var right = x + random(0, half);
      var down = y + random(0, half);
      var left = x - random(0, half);

      beginShape();
      vertex(x, up);
      vertex(right, y);  
      vertex(x, down); 
      vertex(left, y);
      endShape(CLOSE);

      if ((x < width - step) & (y < height - step)) {
        var c2 = color(width - mouseX, height - mouseY, 0);
        fill(c2);
        var letter = inputString.charAt(counter);
        textAlign(CENTER);
        textSize(20);
        text(letter, x + half, y + half);
        counter++;
      }
      if (counter > inputString.length - 1) counter = 0;
    }
  }
}

function keyReleased() {
  // save frame with key s or S
  if (key == 's' || key == 'S') saveCanvas("HH.jpg");
}