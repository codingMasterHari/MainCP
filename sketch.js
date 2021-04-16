const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var glass1, glass2, glass3, glass4, iron1, iron2, iron3, iron4, 
iron6, iron7, iron8, stone1, stone2, stone3, rubber1, rubber2, 
rubber3, rubber4, rubber5, rubber6, hammer1;
var bgImg, hammerImg, hammerSprite;

const bgSound = new Audio("bgSound.wav");

function setup(){
    createCanvas(1000, 610);

    engine = Engine.create();
    world = engine.world;
    bgImg = loadImage("bgImg.png");
    // hammerImg = loadImage("thorH.png");
    // bgImg = loadImage("cons2.jpg");

    iron1 = new Iron(500, 50, 40, 30);
    iron2 = new Iron(490, 100, 40, 30);
    iron3 = new Iron(350, 179, 40, 30);
    iron4 = new Iron(600, 256, 40, 30);
    iron5 = new Iron(100, 397, 40, 30);
    iron6 = new Iron(450, 85, 40, 30);
    iron7 = new Iron(900, 560, 40, 30);
    iron8 = new Iron(400, 500, 40, 30);
    stone1 = new Stone(625, 100, 50, 70);
    stone2 = new Stone(430, 100, 50, 70);
    stone3 = new Stone(130, 100, 50, 70);
    glass1 = new Glass(140, 20, 80, 100);
    glass2 = new Glass(240, 269, 80, 100);
    glass3 = new Glass(440, 82, 80, 100);
    glass4 = new Glass(600, 82, 80, 100);
    rubber1 = new Rubber(840, -50, 30);
    rubber2 = new Rubber(740, -100, 30);
    rubber3 = new Rubber(640, -60, 30);
    rubber4 = new Rubber(540, -10, 30);
    rubber5 = new Rubber(440, -7, 30);
    rubber6 = new Rubber(340, -25, 30);
    hammer1 = new Hammer(200, 0, 120, 20);
    // hammerSprite = createSprite(hammer1.x, hammer1.y);
    // hammerSprite.addImage(hammerImg);
    // hammerSprite.scale = 0.4;

    ground = new Ground(width/2, height-17, width, 15);

}

function draw(){
    background('lightblue');
    background(bgImg);
    Engine.update(engine);
    bgSound.play();
    bgSound.loop = true;
    ground.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
    iron7.display();
    iron8.display();
    stone1.display();
    stone2.display();
    stone3.display();
    glass1.display();
    glass2.display();
    glass3.display();
    glass4.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    hammer1.display();
}