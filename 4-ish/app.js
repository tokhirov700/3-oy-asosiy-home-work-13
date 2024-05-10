let n = 1000;
let addeven = []
let  endeven = []
for (let i = 0; i < n; i++) {
    
    if (i % 2 == 0) {
        addeven.push(i);
 }
 if (i % 2 != 0) {
       endeven.push(i);
 }
}
let resultone = addeven.reduce((a, b) => a + b, 0);
let resulttwo = endeven.reduce((a, b) => a + b, 0);
console.log(resulttwo - resultone)