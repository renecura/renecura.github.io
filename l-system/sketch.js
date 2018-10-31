
const rules = {
  'F':'FF+[+F-F-F]-[-F+F+F]'
}

// const commands = {
//   'F': () => { line(0,0,0,-length); translate(0,-length) },
//   '+': () => { rotate(PI/6);  },
//   '-': () => { rotate(-PI/6); },
//   '[': () => { push(); },
//   ']': () => { pop();  }
// }


// Parametros
let length = 1;
let ratio = 0.4;
let angle = 0.436332;
//let step = 1;
//let chains = ['+XF'];

// Reglas
// const rules = {
//   'X':'X+YF+',
//   'Y':'-FX-Y'
// }
// const rules = {
//   'X':'F+[[X]-X]-F[-FX]+X',
//   'F':'FF'
// }


// Comandos
const commands = {
  'F':() => { line(0,0,0, -length * (ratio**ls.step));
              translate(0,-length * (ratio**ls.step)); },
  'G':() => { line(0,0,0, -length * (ratio**ls.step));
              translate(0,-length * (ratio**ls.step)); },
  '+':() => { rotate(angle);  },
  '-':() => { rotate(-angle); },
  '[':() => { push(); },
  ']':() => { pop();  }
}


const ls = new LSystem(commands);
ls.axiom = 'F';
ls.rules = rules;


let centx = 0;
let centy = 0;

function restart(axiom, rules){
  ls.axiom = axiom;
  ls.parserules(rules);
  ls.start();
}

function stepforward(){
  ls.stepforward();
}

function stepbackward(){
  ls.stepbackward();
}


function setangle(ang){
  angle = radians(ang);
}

function setratio(rat){
  ratio = rat;
}

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder');

  centx = width/2;
  centy = height/2;
  canvas.mousePressed(() => {
    centx = mouseX;
    centy = mouseY;
    console.log(centx, centy);
  });

  length = height/2;
  angle = PI/6;

  noLoop();
}

function draw() {

  resetMatrix();

  background(51);

  translate(centx, centy);

  stroke(255, 100);
  strokeWeight(3);
  ls.turtle();
}