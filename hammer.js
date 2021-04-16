class Hammer extends BaseClass{
  constructor(x, y, width, height) {
    var options = {
      isStatic: false, 
        'restitution': 1,
        'friction': 1,
        'density': 20
    }
    super(x, y, 130, 81);
    this.image = loadImage("thorH.png");
  }
  display() {
    // var pos = this.body.position;
    // var angle = this.body.angle;
    // pos.x = mouseX;
    // pos.y = mouseY;
    // hammerImg.x = mouseX;
    // hammerImg.y = mouseY;
    // // hammer.scale(0.1);
    // push();
    // translate(pos.x, pos.y);
    // rotate(angle);
    // rectMode(CENTER);
    // strokeWeight(5);
    // stroke("blue")
    // fill("pink");
    // rect(0, 0, this.width, this.height);
    // pop();
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
};