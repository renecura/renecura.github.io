
// const rules = {
//   'F':'FF+[+F-F-F]-[-F+F+F]'
// }

// const commands = {
//   'F': () => { line(0,0,0,-length); translate(0,-length) },
//   '+': () => { rotate(PI/6);  },
//   '-': () => { rotate(-PI/6); },
//   '[': () => { push(); },
//   ']': () => { pop();  }
// }


// Parametros
let length = 1;
let chains = ['FX'];
let ratio = 0.7;
let angle = 1;
let step = 1;

// Reglas
const rules = {
  'X':'X+YF+',
  'Y':'-FX-Y'
}

// Comandos
const commands = {
  'F':() => { line(0,0,0, -length * (ratio**step));
              translate(0,-length * (ratio**step)); },
  '+':() => { rotate(angle);  },
  '-':() => { rotate(-angle); },
  '[':() => { push(); },
  ']':() => { pop();  }
}







function lexpand(axiom, rules){
  result = '';

  for (const c of axiom) {
    result += rules[c] == undefined? c: rules[c];
  }

  return result;
}


function turtle(chain, commands){
  for (const c of chain) {
    if(commands[c]) 
      commands[c]();
  }
}


function mousePressed(){
  if(keyIsDown(SHIFT)){
    if(chains.length > 1){
      chains.shift();
      step = chains.length;
    } 
    return;
  }

  chains.unshift(lexpand(chains[0], rules));
  step = chains.length; 
}


function setup() {
  createCanvas(800, 600);
  frameRate(5);
  length = height/2;
  angle = PI/2;
}

function draw() {

  resetMatrix();

  background(51);

  translate(width/2, height/2);

  stroke(255, 100);
  strokeWeight(3);
  turtle(chains[0], commands);
}