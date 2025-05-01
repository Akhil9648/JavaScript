const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")
for (const [key,value] of map) {
    // console.log(`${key}:-${value}`);
}
// For of loop cant be applied on objects
// So we can apply for in loop on objects
const object={
    'game1':'NFS',
    'game2':'GTA'
}
for (const key in object) {
        // console.log(`${key} is ${object[key]}`)
}
// For each loop is used to traverse arrays
const coding=["js","python","java","c","cpp"]
coding.forEach(function(val){
    // console.log(val);  
})
coding.forEach((key)=>{
    console.log(key)
})