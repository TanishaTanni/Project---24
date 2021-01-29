class Hammer{
    constructor(x, y) {
var options = {
    'density':1.5,
    'friction':1.0,
    'resitiution':1.0
}
  this.body = Bodies.rectangle(x,y,50,50,options);
  this.width = 20;
  this.height = 100;

  World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    pos.y = mouseY;
    pos.x = mouseX;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
};