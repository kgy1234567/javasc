let now =new Date();

console.log(now)

//지역 날짜+시간
console.log(now.toLocaleString());

//지역 날짜
console.log(now.toLocaleDateString());

// 지역시간
console.log(now.toLocaleTimeString());

now.setDate(now.getDate() +100);