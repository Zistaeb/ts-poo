export class MyDate {
  constructor (
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
    ) {};

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  };

  private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  };

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') {
      this._day += amount;
    }
    if(type === 'months') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  };

  /*getDay() {
    return this.day;
  }*/

  get day() {
    //code
    return this._day;
  };

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
 };

};

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
//console.log(myDate.getDay());
console.log(myDate.day);                                //metodo get, una funcion que accede al valor interno de una propiedad privada
console.log('1993' , myDate.isLeapYear);

const myDate2 = new MyDate(2000, 8, 9);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 12, 20);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 5, 31);
console.log('2004', myDate4.isLeapYear);
