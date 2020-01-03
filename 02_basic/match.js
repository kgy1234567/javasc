var readline=require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //이메일
var regExpemlil = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//핸드폰
 
var regExphandp = /^\d{3}-\d{3,4}-\d{4}$/;
/// 비밀번호 8-15자
var regexpassw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

r.setPrompt('>');
r.prompt();
r.on('line', function(line){
  if (line === 'exit') {
   r.close();
     }
   if (regExpemlil.test(line)){
   console.log('email 표현식입니다.');
     }
    else if (regExphandp.test(line)){
        console.log('핸드폰 표현식입니다.');
          }
          
       else if (regexpassw.test(line)){
         console.log('비밀번호 표현식입니다.');
           }
           else 
           {console.log('형식에 벗어난 입력입니다.')};

           r.prompt();
        });
          


   console.log(line);
   r.prompt();


r.question("e-mail 형식을 입력하세요.>", function(answer){
      let result= regExpemlil.test(answer);
         console.log(result);
        r,close();
     });






