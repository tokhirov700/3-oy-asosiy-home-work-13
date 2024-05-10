let n = 23;
let  addeven = []
for (let i = 0; i <= n; i++) {
    
    if (i % 2 == 0) {
        addeven.push(i);
 }

}
result = Math.min(...addeven);
console.log(result)