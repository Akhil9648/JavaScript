const userEmail=[]
if(userEmail){
    console.log("Got user Email")
}
else{
    console.log("Dont have user Email");
}
/*
Falsy Values
False,0,-0,bigint,"",null,undefined,NaN
Truthy Values
Truth,1,"0",'false'," ",[],{},function(){}
*/
// Nullish Coaleshig Operator(??):null undefined
let val1
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20
console.log(val1);
// Terniary Operator
// condition?true:false
iceteaprice=100
iceteaprice>=80?console.log("Above 80"):console.log("Below 80");

