
let hairColor;
let bgColor;
let mouthState = 'default';

let pupilLeftX, pupilLeftY;
let pupilRightX, pupilRightY;

function setup() {
  createCanvas(600, 400);
  
  hairColor = color(30, 30, 30);
  bgColor = color(230);
}

function draw() {
  background(bgColor);

  let centerX = width / 2;
  let centerY = height / 2;

  let skinColor = color(255, 224, 190);
  let shirtColor = color(50, 50, 50);

  fill(shirtColor);
  stroke(0);
  strokeWeight(2);
  rect(centerX - 100, centerY + 130, 200, 120, 20, 20, 0, 0);

  fill(skinColor);
  stroke(0);
  strokeWeight(2);
  beginShape();
    vertex(centerX - 30, centerY + 80);
    vertex(centerX + 30, centerY + 80);
    vertex(centerX + 30, centerY + 133);
    for (let angle = 0; angle <= PI; angle += 0.1) {
      let x = centerX + cos(angle) * 30;
      let y = centerY + 133 + sin(angle) * 30;
      vertex(x, y);
    }
  endShape(CLOSE);


  fill(skinColor);
  stroke(0);
  strokeWeight(2);
  ellipse(centerX, centerY, 180, 230);

  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(2);
    line(centerX - 70, centerY - 10, centerX - 20, centerY - 10);
    line(centerX + 20, centerY - 10, centerX + 70, centerY - 10);
  } else {
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(centerX - 45, centerY - 10, 55, 30);
    ellipse(centerX + 45, centerY - 10, 55, 30);

   
    let pupilMinY = (centerY - 10) - 2.5;
    let pupilMaxY = (centerY - 10) + 2.5;

    pupilLeftX = map(mouseX, 0, width, centerX - 55, centerX - 35);
    pupilRightX = map(mouseX, 0, width, centerX + 35, centerX + 55);
    pupilLeftY = map(mouseY, 0, height, pupilMinY, pupilMaxY);
    pupilRightY = map(mouseY, 0, height, pupilMinY, pupilMaxY);

    pupilLeftX = constrain(pupilLeftX, centerX - 55, centerX - 35);
    pupilRightX = constrain(pupilRightX, centerX + 35, centerX + 55);
    pupilLeftY = constrain(pupilLeftY, pupilMinY, pupilMaxY);
    pupilRightY = constrain(pupilRightY, pupilMinY, pupilMaxY);
    
    fill(0);
    noStroke();
    ellipse(pupilLeftX, pupilLeftY, 25, 25);
    ellipse(pupilRightX, pupilRightY, 25, 25);
    
    fill(hairColor);
    noStroke();
    arc(centerX - 45, centerY - 15, 55, 30, PI, TWO_PI);
    arc(centerX + 45, centerY - 15, 55, 30, PI, TWO_PI);
  }
  
  stroke(hairColor);
  strokeWeight(4);
  line(centerX - 70, centerY - 35, centerX - 25, centerY - 38);
  line(centerX + 25, centerY - 38, centerX + 70, centerY - 35);

  noFill();
  stroke(50);
  strokeWeight(2);
  arc(centerX, centerY + 30, 20, 20, 0, PI);
  line(centerX - 10, centerY + 30, centerX - 5, centerY + 10);
  line(centerX + 10, centerY + 30, centerX + 5, centerY + 10);

  stroke(0);
  strokeWeight(2);
  if (mouthState === 'smile') {
    noFill();
    arc(centerX, centerY + 68, 50, 20, 0, PI);
  }else {
    line(centerX - 25, centerY + 70, centerX + 25, centerY + 70);
  }

  fill(hairColor);
  noStroke();
  
  beginShape();
  curveVertex(centerX, centerY - 130); 
  curveVertex(centerX - 10, centerY - 128);
  curveVertex(centerX - 20, centerY - 125); 
  curveVertex(centerX - 30, centerY - 120);
  curveVertex(centerX - 50, centerY - 115); 
  curveVertex(centerX - 60, centerY - 107);
  curveVertex(centerX - 70, centerY - 100); 
  curveVertex(centerX - 80, centerY - 97);
  curveVertex(centerX - 90, centerY - 95); 
  curveVertex(centerX - 95, centerY - 87);
  curveVertex(centerX - 100, centerY - 80); 
  curveVertex(centerX - 102, centerY - 60);
  curveVertex(centerX - 107, centerY - 40); 
  curveVertex(centerX - 110, centerY - 37);
  curveVertex(centerX - 110, centerY - 32); 
  curveVertex(centerX - 115, centerY - 25);
  curveVertex(centerX - 110, centerY - 20); 
  curveVertex(centerX - 110, centerY - 15);
  curveVertex(centerX - 110, centerY - 10);
  curveVertex(centerX - 110, centerY - 5);
  curveVertex(centerX - 110, centerY); 
  curveVertex(centerX - 110, centerY + 5);
  curveVertex(centerX - 110, centerY + 10); 
  curveVertex(centerX - 100, centerY + 5);
  curveVertex(centerX - 90, centerY ); 
  curveVertex(centerX - 80, centerY - 15);
  curveVertex(centerX - 70, centerY - 15); 
  curveVertex(centerX, centerY - 20); 
  curveVertex(centerX + 70, centerY - 15);
  curveVertex(centerX + 80, centerY - 15); 
  curveVertex(centerX + 90, centerY ); 
  curveVertex(centerX + 100, centerY + 5); 
  curveVertex(centerX + 110, centerY + 10); 
  curveVertex(centerX + 110, centerY + 5); 
  curveVertex(centerX + 110, centerY); 
  curveVertex(centerX + 110, centerY - 5); 
  curveVertex(centerX + 110, centerY - 10);
  curveVertex(centerX + 110, centerY - 15); 
  curveVertex(centerX + 110, centerY - 20);
  curveVertex(centerX + 115, centerY - 25); 
  curveVertex(centerX + 110, centerY - 32);
  curveVertex(centerX + 110, centerY - 37);
  curveVertex(centerX + 107, centerY - 40); 
  curveVertex(centerX + 102, centerY - 60); 
  curveVertex(centerX + 100, centerY - 80); 
  curveVertex(centerX + 95, centerY - 87); 
  curveVertex(centerX + 90, centerY - 95);
  curveVertex(centerX + 80, centerY - 97); 
  curveVertex(centerX + 70, centerY - 100); 
  curveVertex(centerX + 60, centerY - 107); 
  curveVertex(centerX + 50, centerY - 115); 
  curveVertex(centerX + 30, centerY - 120); 
  curveVertex(centerX + 20, centerY - 125); 
  curveVertex(centerX + 10, centerY - 128); 
  curveVertex(centerX, centerY - 130);
  endShape(CLOSE);
  beginShape();
  curveVertex(centerX - 100, centerY - 70); 
  curveVertex(centerX - 110, centerY - 40); 
  curveVertex(centerX - 115, centerY); 
  curveVertex(centerX - 80, centerY + 60); 
  curveVertex(centerX - 90, centerY);
  endShape(CLOSE);
  beginShape();
  curveVertex(centerX + 100, centerY - 70); 
  curveVertex(centerX + 110, centerY - 40); 
  curveVertex(centerX + 115, centerY); 
  curveVertex(centerX + 70, centerY + 70); 
  curveVertex(centerX + 90, centerY);
  endShape(CLOSE);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    mouthState = 'smile';
  } 
  else if (key === 'd' || key === 'D') {
    mouthState = 'default';
  }
  
  if(key=='r'){
    saveGif('MySketch',7);
}
}
