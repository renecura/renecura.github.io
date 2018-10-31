
class LSystem {

  constructor(commands){
    this.commands = commands;

    this.axiom = '';
    this.rules = {};

    this.chains = []; // Stack of chains

    this.start();
  }


  start(){
    this.step = 1;
    this.chains = [this.axiom];
  }


  expand(chain){
    let result = '';  
    for (const c of chain) {
      result += this.rules[c] == undefined? c: this.rules[c];
    }  
    return result;
  }


  stepforward(){
    if(this.chains.length < 1) return;

    const ex = this.expand(this.chains[0]);
    this.chains.unshift(ex);
    this.step = this.chains.length; 
  }
  

  stepbackward(){
    if(this.chains.length < 2) return;
    
    this.chains.shift();
    this.step = this.chains.length;    
  }

  turtle(){
    for (const c of this.chains[0])
      if(this.commands[c]) this.commands[c]();    
  }


  parserules(definition){
    let rs = {};
    const reg = /\s*[A-Z\-\+\[\]]\s*->\s*[A-Z\-\+\[\]]+\s*/i;
    for (const r of definition.split("\n")) {
      if(reg.test(r)){
        const rr = r.split("->");
        rs[rr[0].trim()] = rr[1].trim();
      }      
    }
    this.rules = rs;
  }
}