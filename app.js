function array(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr
    
}
let arrresult = array(6);
let result = arrresult.map(x => x ** 2);
console.log(result);


