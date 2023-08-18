const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12);     // 0=enero, 11=diciembre
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let MyVar;

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor ( year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
};

const myDate = new MyDate(2023, 0, 17);   //Instancia de la class
console.log(myDate);
