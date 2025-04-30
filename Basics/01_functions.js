function login(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} Just logged in`
}
// console.log(login("Akhil"))
function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprice(200,400,500))
const user={
    username:"Akhil",
    price:177
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)
