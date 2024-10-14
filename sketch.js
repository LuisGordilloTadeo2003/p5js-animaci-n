//VARIABLES GLOBALES
class Barra {
  constructor() {
    this.x = 350
    this.y = 250
    this.w = 100
    this.h = 100
  }

  display() {
    rect(this.x, this.y, this.w, this.h)
  }

  move() {
    //let pos = constrain(mouseX, this.w / 2, width - this.w / 2);
    //this.x = pos - this.w / 2;
  }
}

let barra;

function preload() {

}

function setup() {
  createCanvas(800, 600);

  barra = new Barra()

  noCursor();
}

function draw() {
  background(0);

  bola.display();
  bola.move();
  bola.bounce();

  barra.display();
  barra.move();

  rebotaBarraBola(barra, bola);
}

function rebotaBarraBola(barra, bola) {
  if (barra.y + barra.h > bola.y + bola.size / 2
    && bola.y + bola.size / 2 > barra.y
    && barra.x < bola.x
    && bola.x < barra.x + barra.w) {
    bola.vy = - bola.vy;
  }
  if (bola.prevY < barra.y || bola.prevY > barra.y + barra.h) {
    bola.vy = -bola.vy
  }
  if (bola.prevX < barra.x || bola.prevX > barra.x + barra.h) {
    bola.vx = - bola.vx
  }
}

