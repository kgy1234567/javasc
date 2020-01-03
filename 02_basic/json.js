const jsobject = [
    {
        name: '윤인성',
        region: '서울'

    },
    {
        name: '윤명월',
        region: '도교'

    }
];

let outputA= JSON.stringify(jsobject);
let outputB= JSON.stringify(jsobject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log('----------------------------');


let outputC = JSON.parse(outputA);
console.log(typeof(outputC));
console.log(outputC);