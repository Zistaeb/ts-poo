export class MyServices {

  static instance: MyServices | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if(MyServices.instance === null){
      console.log('deberia entrar una vez');
      MyServices.instance = new MyServices(name);
    }
    return MyServices.instance;
  }
}

//const myServices = new MyServices('Trineami');
//console.log(myServices.getName());

//const myServices2 = new MyServices('Nesfime');
//console.log(myServices2.getName());

const myServices = MyServices.create('Figaro');
console.log(myServices.getName());
const myServices2 = MyServices.create('Blanca');
console.log(myServices2.getName());
const myServices3 = MyServices.create('Pocahontas');
console.log(myServices3.getName());

console.log(myServices === myServices2);

