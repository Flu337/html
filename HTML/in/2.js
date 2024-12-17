//const obj = {
    a:3,
    b:5,
    c:7,
//}
//obj.d = 4;
//obj.e = 6;
//obj.a = 8;
const numb = [1,2,3,4,5,6,7];

function doubleNum (num) {

    return num *2;
} 

const result = numb.map(doubleNum);
console.log(result)
console.log(numb)
