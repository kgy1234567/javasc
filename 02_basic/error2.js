function callTTs(callback){
    if(callback){
    for (let i =0 ; i<3; i++){callback();
      }

} else {

    console.log('NO');
}
}
callTTs(function(){console.log('안녕하세요.');});
callTTs();