let now =new Date();

console.log(now)

//���� ��¥+�ð�
console.log(now.toLocaleString());

//���� ��¥
console.log(now.toLocaleDateString());

// �����ð�
console.log(now.toLocaleTimeString());

now.setDate(now.getDate() +100);