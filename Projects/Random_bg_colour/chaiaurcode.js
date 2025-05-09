const randomcolour=function(){
    const hex='123456789ABCEDF';
    let colour='#';
    for(let i=0;i<6;i++){
      colour+=hex[Math.floor(Math.random()*16)];
    }
    return colour;
  }
  let interval;
  const startChangingColour=function(){
     interval=setInterval(changeBg,1000)
    function changeBg(){
      document.body.style.backgroundColor=randomcolour();
    }
  }
  const stopChangingColour=function(){
    clearInterval(interval)
    interval=null;
  }
  document.querySelector("#start").addEventListener('click',startChangingColour)
  document.querySelector("#stop").addEventListener('click',stopChangingColour)