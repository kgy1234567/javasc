var http =require('http');

function alertMsg(msg,url){
return `
<!DOCTYPE html>
<html>
<head>
    <title>  alert and prompt </title>
    <meta charset="utf-8">
    <script>
       alert("${msg}");
     //location.href = "${msg}";
   </script>




</head>
<body>
    <h3>경고메세지</h>
</body>


</html>
`;
}

var app= http.createServer(function(request,response)
{
   console.log(request.url);   
   response.writeHead(200);
   let alert = alertMsg("경고창에 뜨는 메시지", "https://www.naver.com");
    response.end(alert);
});
app.listen(3000);