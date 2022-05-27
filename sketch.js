function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#E5E1CC');
  fill('#E5E1CC');
obj = createGraphics(windowWidth, windowHeight);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(300,60);
}

function draw() {
  button = createButton('clear');
  button.size(100, 60);
  button.position(60, 60);
  button.mousePressed(setup);

  savedbutton = createButton('save');
  savedbutton.size(100, 60);
  savedbutton.position(170, 60);
  savedbutton.mousePressed(saver);
  if (mouseIsPressed === true) {
    stroke(colorPicker.color());
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


}

function saver() {
  saveCanvas('Imadethis', 'jpg');
}