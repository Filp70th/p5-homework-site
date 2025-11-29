let cx, cy;

function setup() {
  createCanvas(600, 400);
  background(0);
  noFill();
  cx = width / 2;
  cy = height / 2;
  noLoop();
}

function draw() {
  stroke(0, 200, 255, 120);

  for (let rad = 20; rad < 220; rad += 15) {

    let spokes = 12;

    for (let i = 0; i < spokes; i++) {

      strokeWeight(random(1.2, 3.6));

      let ang = TWO_PI / spokes * i;

      let x1 = cx + cos(ang) * rad;
      let y1 = cy + sin(ang) * rad;

      let ang2 = ang + random(-0.18, 0.18);
      let rad2 = rad + random(20, 60);
      let x2 = cx + cos(ang2) * rad2;
      let y2 = cy + sin(ang2) * rad2;

      line(x1, y1, x2, y2);

      bezier(
        cx, cy,
        (x1 + cx) / 2 + random(-18, 18),
        (y1 + cy) / 2 + random(-18, 18),
        (x2 + cx) / 2 + random(-26, 26),
        (y2 + cy) / 2 + random(-26, 26),
        x2, y2
      );
    }
  }

  for (let i = 0; i < 100; i++) {
    let r = 15 + i * 20;
    let sw = random(0.5, 4.5);
    strokeWeight(sw);
    stroke(0, 200, 255, 100 + random(-30, 30));
    ellipse(cx, cy, r * 2);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('symmetry_center_circles_600x400', 'png');
  }
}
