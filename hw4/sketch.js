let branchList = [];
let circleLineW = [];
let totalCircles = 25;

function setup() {
  createCanvas(300, 200);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  frameRate(5);

  let midX = width / 2;
  let midY = height / 2;

  makeBranches(midX, midY);
  makeCircleWeights();
}

function makeBranches(mx, my) {
  let howManySpokes = 17;

  for (let rr = 20; rr < 110; rr += 8) {
    for (let ii = 0; ii < howManySpokes; ii++) {
      let baseAng = TWO_PI / howManySpokes * ii;

      branchList.push({
        rr,
        baseAng,
        idNum: rr * 100 + ii,

        a2shift: random(-0.18, 0.18),
        r2shift: random(5, 20),

        lineThick: random(2, 6),
        bezThick: random(1.5, 4),

        c1xshift: random(-9, 9),
        c1yshift: random(-9, 9),
        c2xshift: random(-13, 13),
        c2yshift: random(-13, 13)
      });
    }
  }
}

function makeCircleWeights() {
  for (let i = 0; i < totalCircles; i++) {
    circleLineW.push(random(0.5, 4));
  }
}

function draw() {
  background(0);

  let midX = width / 2;
  let midY = height / 2;

  let t = millis();
  let slowWave = sin(t * 0.004);
  let nowHue = map(slowWave, -1, 1, 120, 240);

  let rippleMove = (t * 0.02) % 15;

  drawMiddleCircles(midX, midY, nowHue, rippleMove);
  drawBranchStuff(midX, midY, nowHue, t);
}

function drawBranchStuff(mx, my, hVal, t) {
  let windTime = t * 0.001;
  let windPower = 15;

  for (let obj of branchList) {
    let xStart = mx + cos(obj.baseAng) * obj.rr;
    let yStart = my + sin(obj.baseAng) * obj.rr;

    let a2 = obj.baseAng + obj.a2shift;
    let r2 = obj.rr + obj.r2shift;

    let xEnd0 = mx + cos(a2) * r2;
    let yEnd0 = my + sin(a2) * r2;

    let nX = noise(obj.idNum * 0.1 + windTime);
    let nY = noise(obj.idNum * 0.1 + windTime + 10000);

    let wX = map(nX, 0, 1, -windPower, windPower);
    let wY = map(nY, 0, 1, -windPower, windPower);

    let xEnd = xEnd0 + wX;
    let yEnd = yEnd0 + wY;

    strokeWeight(obj.lineThick);
    stroke(hVal, 90, 100, 50);
    line(xStart, yStart, xEnd, yEnd);

    strokeWeight(obj.bezThick);
    stroke(hVal, 80, 100, 40);

    let cc1x = (xStart + mx) / 2 + obj.c1xshift;
    let cc1y = (yStart + my) / 2 + obj.c1yshift;

    let cc2x = ((xEnd0 + mx) / 2 + obj.c2xshift) + wX;
    let cc2y = ((yEnd0 + my) / 2 + obj.c2yshift) + wY;

    bezier(mx, my, cc1x, cc1y, cc2x, cc2y, xEnd, yEnd);
  }
}

function drawMiddleCircles(mx, my, hVal, rip) {
  let step = 11;
  let maxR = (totalCircles * step) + 20;

  for (let i = 0; i < totalCircles; i++) {
    let r = (20 + i * step + rip) % maxR;
    strokeWeight(circleLineW[i]);
    stroke(hVal, 70, 90, 80 + random(-20, 20));
    ellipse(mx, my, r * 2);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('animated_artwork', 8);
  }
}
