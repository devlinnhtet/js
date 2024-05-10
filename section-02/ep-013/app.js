let ninjas = ['alice', 'bob', 'mario'];

console.log(ninjas[1]);
ninjas[1] = 'yoshi';
console.log(ninjas[1]);

let random = ['alice', 23, true]; // different datatype can assign

// properties & methods
console.log(ninjas.length);

console.log(ninjas.join('-'));
console.log(typeof ninjas.join(',')); //=> String

console.log(ninjas.indexOf('mario'));
console.log(ninjas.indexOf('hello')); //=> return -1

console.log(ninjas.concat(['ken', 'crystal']));

console.log(ninjas.push('john'));
console.log(ninjas.pop()); //=> John