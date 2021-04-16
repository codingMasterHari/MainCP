class Stone extends BaseClass{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':10,
        'density':12
    }
    // this.body = Bodies.rectangle(x, y, width, height, options);
    // this.width = width;
    // this.height = height;
    
    // World.add(world, this.body);
    super(x, y, 70, 50);
    this.image = loadImage("stone.png");
  }
  display(){
    // var pos = this.body.position;
    // var angle = this.body.angle;
    // push();
    // translate(pos.x, pos.y);
    // rotate(angle);
    // rectMode(CENTER);
    // strokeWeight(4);
    // stroke("yellow")
    // fill("brown");
    // rect(0, 0, this.width, this.height);
    // pop();
    super.display();
  }
};
  