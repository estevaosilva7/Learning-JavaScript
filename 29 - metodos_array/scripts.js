// length

var array = [1, 2, 3, 4, 5];
console.log(array.length);

// push

array.push(6);
array.push("Qualquer tipo de dado");
console.log(array);

// pop

array.pop();
console.log(array);

array.pop();
console.log(array);

// unshift

array.unshift(0);
console.log(array);

// shift

array.shift();
console.log(array);

// acessar o último elemento

console.log(array[array.length - 1]);

// IsArray

console.log(Array.isArray(5));
console.log(Array.isArray(array));