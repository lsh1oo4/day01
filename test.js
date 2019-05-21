//1. hello world
// console.log('hello world');

//2. 자료형 
// var length = 16;
// var lastName="Johnson";
// console.log(lastName);
// var x = {firstName:"John", lastName:"Doe"};

// console.log(x);

// var x = 16+"volvo";
// console.log(x);

// x =16+4;
// console.log(x);

// x = 'volvo'+'human';
// console.log(x);


//3. 메서드 및 연산
// function calc(a,b){
//     return a*b;
// };

// var x = calc(4,5);
// console.log(x);
// function calc(a,b){
//     return a-b;
// };
// function calc2(a,b){
//     return a*b;
// };

// console.log("빼기 :"+calc(5,2)+"\n곱하기 :"+calc2(5,2));


//4. 오브젝트
var car = [
    {
        name: "first",
        color: "yellow",
        start:function(){
            console.log("출발");
        },
        stop:function(){
            console.log("멈춤");
        }
    },
    {
        name: "second",
        color: "red"
    }
]

console.log(car[0].name+" "+car[0].color);
console.log(car[1].name+" "+car[1].color);