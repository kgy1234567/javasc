let a,b,k,str1,str2;

for(a=100;a<1000;a++){
    for(b=100;b<1000;b++){
        let k=a*b;
         str1= String(k);
        
        let str2=str1.split('').reverse().join('');

        if(str2===str1){
            console.log(str2);
        }
         


    }
}



