let num = +prompt("Enter num: ")
function nums (num) {
    let arr = []
    for (let i = 1; i < num; i++) {
        arr.push(i)
    }
    return arr
}
let arr = nums(num)
console.log(arr.reduce((s, i) => s + i, 0))