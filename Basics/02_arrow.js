const user={
    username:"Akhil",
    price:999,
welcomeMessage:function(){
    console.log(`${user.username},Welcome to website price:${user.price}`)
    console.log(this);
    
}
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this)
// function chai(){
//     console.log(this);
// }
// chai()
const chai=()=>{
    console.log(this);
}
chai()