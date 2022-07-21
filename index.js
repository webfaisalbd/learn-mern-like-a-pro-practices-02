// Write my Javascript code!
const students = [
  {
    name: 'John',
    age: 20,
  },
  {
    name: 'Mohn',
    age: 30,
  },
];
const totalAge = students.reduce((preV, cur) => {
  preV = preV + cur.age;
  return preV;
}, 0);
const averageOfAge = totalAge / students.length;
console.log(totalAge);
console.log(averageOfAge);
