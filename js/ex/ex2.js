//선언적함수 
//수를 받아 제곱한 결과를 반환하기
// function n(i){
//     return i *= i;
// }
// console.log(n(11));

//익명 함수 : 함수명이 생략된 함수정의자체를 변수명에 저장
//배열을 넘겨 받아 배열 원소들의 합계를 계산하여 반환하는 함수 만들기
// let sumArray = function(){
//     let ar = [1,2,3,4,5,6,7];
//     let sum=0;
//     for(item of ar){
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumArray());

//배열의 원소가 모두 number이면 true 아니면 false를 반환하는 함수
// let isAllNumber = function(){
//     let num = [1,2,3,4,5,"사람"];
//     for(item of num){
//         if(typeof(item)!='number'){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAllNumber());

//화살표 함수 : 익명함수를 더 간단하게 생성할수있는방법
//두수를받아 큰수 반환하기
// let max = (a,b) =>{
//     if(a>b) return a;
//     else return b;
// }
// console.log(max(3,2));

//세수를 받아 큰수 반환하기
// let max = (a,b,c) =>{
//     if(a>b)
//         if(a>c)
//             return a;
//     if(b>c)
//         if(b>a)
//             return b;
//     return c;
// }
// console.log(max(5,8,3));

//배열원소중 가장 큰값 반환하기
// let ar = [12,12,53,35,216]
// let maxValue = (ar) => {
//     let max = 0;
//     for(item of ar)
//         if(item>max)
//             max = item;
//     return max;
// }
// console.log(maxValue(ar));

//매개변수 초기화
//함수에 디폴트 매개변수 적용 연습

//인사하는사람의 이름을 디폴트로 설정하기
// welcome()
// welcome("이순신");
// welcome("이순신","강감찬");
//html code 문자열 생성하기

//배열이 없으면 0을 반호나하기

// let alram = function() {
//     console.log("wake up!");
// }

// let keyInterval = setInterval(alram,1000);

// let stopAlram =function(){
//     console.log("stop!")
//     clearTimeout(keyInterval);
// }

// setTimeout(stopAlram,4000)

// function sayHello(host){
//     let hello = function(guest="쎅"){
//     console.log(`반갑습니다. 저는 ${host}이고요 오늘의 게스트 ${guest}씨를 소개합니다.`)
//     }
//     return hello;
// }

// let hong = sayHello("홍길동");
// hong();

function randomOutput(one,two){
    let num = Math.floor(Math.random());
    console.log(num);
}
randomOutput();