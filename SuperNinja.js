class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = 100;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(this.nombre);
  }

  showStats() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fuerza: ${this.fuerza}`);
    console.log(`Velocidad: ${this.velocidad}`);
    console.log(`Salud: ${this.salud}`);
  }

  drinkSake() {
    this.salud += 10;
    console.log(`${this.nombre} bebió Sake y ganó 10 puntos de salud. Salud actual: ${this.salud}`);
  }
}

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
  }
}

// Ejemplo de uso:
const totosai = new Sensei("Totosai");
totosai.speakWisdom();
totosai.showStats();

const myoga = new Sensei("Myoga");
myoga.showStats();


