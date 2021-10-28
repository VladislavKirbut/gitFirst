'use strict';

let mass = ['apple','potato','bread','milk','tea'];
console.log(mass[3]);
mass.push('vergetables');
console.log(mass);
mass.pop();
console.log(mass);
mass.shift();
console.log(mass);
mass.unshift('fruits');
console.log(mass);

let obj = {
    name:"Vlad",
    surname:"Kirbut'",
    age: 18,
    number:8,
    boolean:true
};
console.log(obj.name + ' ' + obj.surname);
console.log(obj["name"]);
obj.class = 13;
console.log(obj.class);
console.log(obj);
console.log(obj["surname"]);
console.log('apple' * 8);

let age = +prompt("Enter your age"," ");
console.log(typeof(age));


console.log(4 + +" -apple");
console.log('2' === 2);
let apple = true,
    potato = false;
console.log('s' && 1 && 78 && 'apple' && 0);