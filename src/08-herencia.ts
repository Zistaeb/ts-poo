export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I am ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,                   //Obtener del padre y pasar al contructor de la herencia
    public owner: string
    ) {
      super(name);
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log('woof!!!');

    }
  }
}

const animal = new Animal("leon");
animal.move();
console.log(animal.greeting());
console.log(animal.name);

const cheis = new Dog('Cheis', 'Fefa');
cheis.move();
console.log(cheis.greeting());
console.log(cheis.name);
cheis.woof(5);
console.log(cheis.owner);
