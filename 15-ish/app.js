let n = 15;
let  endeven = []
for (let i = 0; i <= n; i++) {

 if (i % 2 != 0) {
       endeven.push(i);
 }
}
let result = endeven.reduce((a, b) => a + b, 0);
console.log(result);