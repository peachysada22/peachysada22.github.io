var NUM_CIRCLES = 12;
var circleDiameter

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}
function draw() {
    var x = 0;
    while (x<=width) {
      elipse (x, 0, circleDiameter, circleDiameter)  
        x = x + circleDiameter;
    }
}