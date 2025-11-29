function setup() {

  createCanvas(600, 400);
  noLoop();
}

function draw() {
 
  background(230);

  let centerX = width / 2;
  let centerY = height / 2;

  let skinColor = color(255, 224, 190);
  let hairColor = color(30, 30, 30);  
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



  stroke(0);
  strokeWeight(2);
  
  fill(255);
  ellipse(centerX - 45, centerY - 10, 55, 30);
  ellipse(centerX + 45, centerY - 10, 55, 30);

  fill(0);
  noStroke();
  ellipse(centerX - 45, centerY - 10, 25, 25);
  ellipse(centerX + 45, centerY - 10, 25, 25);
  
  fill(hairColor);
  arc(centerX - 45, centerY - 15, 55, 30, PI, TWO_PI);
  arc(centerX + 45, centerY - 15, 55, 30, PI, TWO_PI);
  
  stroke(hairColor);
  strokeWeight(4);
  line(centerX - 70, centerY - 35, centerX - 25, centerY - 38);
  line(centerX + 25, centerY - 38, centerX + 70, centerY - 35);

  noFill();
  stroke(50);
  arc(centerX, centerY + 30, 20, 20, 0, PI);
  line(centerX - 10, centerY + 30, centerX - 5, centerY + 10);
  line(centerX + 10, centerY + 30, centerX + 5, centerY + 10);


  stroke(0);
  line(centerX - 25, centerY + 70, centerX + 25, centerY + 70);

  
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
  curveVertex(centerX, centerY - 20);  //중간
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
