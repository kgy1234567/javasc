let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

if (now.getUTCHours<=12){
    console.log('오전'+now.getHours()+'시');
}
else
{
    console.log('오후'+(now.getHours()-12)+'시');
}
