// const promiseone = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB ChannelSplitterNode, cryptography, network
//     setTimeout(function() {
//         console.log('Async task is complete');   
//         resolve();
//     }, 1000);
// });

// promiseone.then(function() {
//     console.log("Promise Consumed");
// });
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Asynce 2 resolved");
})