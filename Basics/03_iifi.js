// Immediately Invoked Funtion Expressions(IIFE)
(function chai(){
    console.log("DB CONNECTED");
})();
// Due to the pollution caused by global scope to get rid of that pollution we use iife
((name)=>{
    console.log(`DB CONNECTED2 ${name}`);
})('Akhil');
//Always use semicolon to end this function