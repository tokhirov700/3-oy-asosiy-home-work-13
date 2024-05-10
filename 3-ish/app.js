let n = 6;
let arr = [];
for (let i = 1; i < n; i++) {
    arr.push(i);
}
let result = arr.reduce((a, b) => a + b, 0);
console.log(result);
