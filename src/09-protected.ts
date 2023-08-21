export class Animal {
  constructor(protected name: string) {}         //privado con herencia

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I am ${this.name}`;
  }

  protected doSomething() {
    console.log('doooo');
  }

}

export class Dog extends Animal {
  constructor(
    name: string,                   //Obtener del padre y pasar al contructor de la herencia
    public owner: string
    ) {
      super(name);                  // llamado al constructor, solo se puede llamar desde constructor del hijo, no desde un metodo dentro de la clase
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log(`woof!!! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    //code
    console.log('moving as a dog');
    super.move();
  }
}

const cheis = new Dog('Cheis', 'Fefa');
//cheis.name = 'Dinky';
cheis.woof(1);
cheis.move();

