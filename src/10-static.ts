console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,3,4,5,6,7));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => max >= item? max: item, 0);
  }
}

//const math = new MyMath();
//math.PI;

//const max = new MyMath();
//max.max;

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(8,7,9,6,4));
const numbers = [10,5,8,97,6,35];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1,-9,-8));
