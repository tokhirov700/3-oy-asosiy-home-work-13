let n = 9;
let  endeven = []
for (let i = 0; i <= n; i++) {

 if (i % 2 != 0) {
       endeven.push(i);
 }
}
let result = Math.max(...endeven);
console.log(result);
