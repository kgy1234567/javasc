
let id=setInterval(function(){
    console.log('1초경과');
    },1000);

    setTimeout(function(){
        clearInterval(id)
        },5500);