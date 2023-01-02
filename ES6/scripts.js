/* let a = 5;
{
  let a = 'morteza';
  console.log(a)
}
console.log(a) */

const baseURL = 'http://mySite/api'
// console.error(baseURL);
// baseURL = baseURL + '/v1'; // error

const names = ['Mojtaba'];
names.push('Fateme');
names.unshift('Farzad');
// names = [] error
// console.log(names);


/* function sum(a, b) {
  return a + b
}
const sumTwoNumber = sum(4, 1);
console.log(sumTwoNumber) */

const sum = (a, b = 2) => { return a + b };
// console.log(sum(4, 1)); // result 5
// console.log(sum(4)); // result 6

const printNames = (n1, n2, ...others) => {
  console.log(n1);
  console.log(n2);
  console.log(others)
};
// printNames('Ali', 'morteza', 'Hassan', 'Hoosein', 'Fatemeh', 'Farzad')

let arr1 = ['Ali'];
arr1.push('morteza')
let arr2 = [...arr1];
arr1.push('mojtaba')
// console.log('arr1', arr1);
// console.log('arr2', arr2);

const name1 = ['morteza', 'mojtaba'];
const name2 = ['Ali', 'morteza'];

const ourNames = new Set([...name1, ...name2]);
// console.log(ourNames)

const num1 = 5;
const num2 = 10;
const myString = 'sum num1:' + num1 + ' , num2:' + num2 + ' = ' + parseInt(num1 + num2);
const newString = `sum num1:${num1} , num2:${num2} = ${num1 + num2}`
// console.log(myString);
// console.log(newString);

const sumNumbers = (a, b, ...otherNumbers) => {
  let sum = a + b;
  for (let num of otherNumbers) {
    sum += num;
  }
  return sum;
}
// console.log(sumNumbers(1, 2, 3, 4, 5))

const myName = 'Morteza QorbanAlizade';
// console.log(myName.startsWith('M'));
// console.log(myName.startsWith('m'));
// console.log(myName.endsWith('e'));
// console.log(myName.includes('rte'))

const student = {
  name: 'Ali',
  family: 'Alavi',
  age: 28,
  mobile: "09139998877"
};
const { name: username, family } = student;
// console.log(username, family)

const printNameField = ({ name, family }) => {
  console.log(name + ' ' + family)
}
// printNameField(student);

/* const namesArr = ['ali', 'morteza', 'ali', 'fatemeh', 'javad', 'ali', 'morteza'];
const uniqueNames = [];
const uniqArr = () => {
  const name = namesArr.pop();
  console.log(name)

  if (name && !uniqueNames.includes(name)) {
    uniqueNames.push(name)
  }
  console.log(uniqueNames)
}
 */






const namesArr = ['ali', 'morteza', 'ali', 'fatemeh', 'javad', 'ali', 'fatemeh'];
const uniqueNames = [];
const uniqueNameSet = new Set(); // es6
const uniqueNameFn = () => {
  const name = namesArr.pop();
  console.log(name);

  /* if (name && !uniqueNames.includes(name)) {
    uniqueNames.push(name);
  } */
  // console.log(uniqueNames)

  if (name) uniqueNameSet.add(name);
  console.log(Array.from(uniqueNameSet))
  console.log(uniqueNameSet.has('ali'))
}

const uniqueNameFn2 = () => {
  console.log(Array.from(new Set(namesArr)));
}
