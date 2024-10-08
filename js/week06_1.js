//문자열을 수로 변환하는 함수

// let str = "36.5도";

// console.log(parseFloat(str));

//settimeout(함수, 시간)
// 지정한 시간이 지나면 함수를 호출하도록 에약하는 함수
let bomb = function(){
    console.log("Boooooooooooooooooooom");
}

let keyTimeOut = setTimeout(()=>{console.log("Booom~");},3000);
console.log("boom set");

let deleteBomb = function(){
    clearTimeout(keyTimeOut);
    console.log("폭탄이 해체되었다.");
}

setTimeout(deleteBomb,3000);