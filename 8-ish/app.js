let n = 15
function newArr (n) {
    let arr = []
    for (let i = 1; i < n; i++) {
        arr.push(i)
    }
    return arr
}
let array = newArr(n)
function findIndex (arr, k, l) {
    let newArr = []
    for (let i = k; i <= l; i++) {
        newArr.push(i)
    }
    return newArr
}
let sumIndex = findIndex(array, 4, 11)
console.log(sumIndex.reduce((s, i) => s + i, 0))