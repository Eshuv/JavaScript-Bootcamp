let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1
*/

let login = "a"
let isLoggedIn = Boolean(login)

console.log(typeof isLoggedIn);
console.log(isLoggedIn);

/*
1 => true, 0 => false
"" => false
"a" => true
*/

let num = 33
let toString = String(num)

console.log(typeof toString);
console.log(toString);