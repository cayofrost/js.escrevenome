function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("purple");
    fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
     circle(mouseX, mouseY, 20, 35);
    }
  }