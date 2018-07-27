
let bx = 4;
let step;
let f = fun;
let g = undefined;
let h = undefined;


function setup() {
  createCanvas(600,600);
  
  frameRate(1);
}

function draw() {

  step = bx / width;

  background(0);

  strokeWeight(0.5);
  stroke(255);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);

  stroke(96);
  line(0, ysnap(1), width, ysnap(1));
  line(xsnap(1), 0, xsnap(1), height);
  line(0, ysnap(-1), width, ysnap(-1));
  line(xsnap(-1), 0, xsnap(-1), height);

  
  strokeWeight(2);
  stroke(255,0,0);
  drawfun(f);

  stroke(0,0,255);
  drawfun(g);

  stroke(0,255,0);
  drawfun(h);
}


function drawfun(f){
  if (f == undefined) return;

  let lx = 0;
  let ly = 0;

  for(let x = -bx; x < bx; x+=step){
    let y = f(x);
    
    const xx = xsnap(x);
    const yy = ysnap(y);

    line(lx, ly, xx, yy);

    lx = xx;
    ly = yy;
  }
}


function fun(x){
  return cos(x);
}

function xsnap(x){
  return map(x,-bx,bx,0,width);
}

function ysnap(y){
  return map(y,bx,-bx,0,height);
}