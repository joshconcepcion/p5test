let colorArray = ["#5F0F40", "#9A031E", "#FB8B24", "#E36414", "#0F4C5C"];


// let s0; 

let s = []; 

let numObjects = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  // s0 = new Squirly(width/2, 0);

   
  for(let i = 0; i < numObjects; i++) {
    
    let x = map(i, 0, numObjects, 50, width - 50);
    
    s[i] = new Squirly(x, 0); 
    
  }
}

function draw() {

  // s0.show();
  
  for(let i = 0; i < numObjects; i++){
  
  s[i].show();    
  }
  
}

//   push()
//   translate(width/2, 0 + yInc)
//   rotate(radians(sin(xOff) * 360))
//   noFill()
//   rect(0, 0, 10);
//   line(0, 0, 0, 100);

//   pop()

//   yInc += 1;
//   xOff += 0.01

class Squirly {
  
  constructor(_x, _y) {
    this.x = _x; 
    this.y = _y; 
    this.length = random(100, 200); 
    this.color = color(random(colorArray));
    this.sw = random(0.3, 4);
    this.speed = random(0.7, 1.5); // used to increment Y position
    this.rot = random(360);
    this.rotInc = random();
    this.offset = 0;
    this.offsetSpeed = random(0.001, 0.005);
    this.alpha = 0;
  }
  
  show(){
    
    push()
    translate(this.x, this.y);
    
    this.rotInc = noise(this.offset) * 360;
    
    rotate(radians(this.rot + this.rotInc));
    
    stroke(this.color);
    
    this.alpha = map(noise(this.offset), 0, 1, 20, 100); 
    
    this.color.setAlpha(this.alpha);
    
    strokeWeight(this.sw);
    
    line(0, 0, 0, this.length);
    
    
    pop()
    
    if(this.y >= height || this.y < 0) {
      this.speed = this. speed * -1
    } 
    this.y += this.speed;
    this.offset += this.offsetSpeed
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
  draw();
}
