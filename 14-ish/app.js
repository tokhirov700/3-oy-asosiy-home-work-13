let num = prompt("Istalgan butun son kiriting:"); 
if (num <= 1) {
    console.log(`${num} murakkab emas.`);
} else {
    let searchh = true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            searchh = false;
            break;
        }
    }
    if (searchh) {
        console.log(`${num} murakkab son.`);
    } else {
        console.log(`${num} murakkab emas.`);
    }
}