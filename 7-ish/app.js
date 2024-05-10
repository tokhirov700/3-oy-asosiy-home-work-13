let users = [
    {
        name: "Kamol",
        age: 50
    },
    {
        name: "Ali",
        age: 28
    },
    {
        name: "HusanboyVaSindor",
        age: 20
    },
    {
        name: "Vali",
        age: 39
    }
]


for(let i = 0; i < users.length; i++){
    if(users[i + 1]){
        let difference = users[i].age - users[i + 1].age;
        if(difference < 0){
            console.log(`${users[i].name} ${Math.abs(difference)} yosh kichkina ${users[i + 1].name} dan` )
        }
        else{
            console.log(`${users[i].name} ${Math.abs(difference)} yosh katta ${users[i + 1].name} dan` )
        }
    }
}

let dif = users[users.length - 1].age - users[0].age;


console.log(`${users[users.length - 1].name} ${Math.abs(dif)} yosh ${dif < 0 ? "kichik" : "katta"} ${users[0].name} dan` )