import { Animal, Dog } from './09-protected';

//const animal = new Animal('Toky');       //abstract, no me va a permitir crear instancias del objeto padre
//animal.greeting();

const dog = new Dog('Pinky', 'Lola');
dog.greeting();
dog.woof(2);
