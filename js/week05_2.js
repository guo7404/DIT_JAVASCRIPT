//CallBack 함수 연습

// function sayHello(){
//     console.log("안녕하세요, 반갑습니다.");
// }
let printDIT = function(){
    console.log("HelloDIT");
}
function call5time(cbf){
    for(let i=1;i<5;i++)
        cbf();
}
call5time(printDIT);
printDIT();