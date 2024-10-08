//CallBack 함수 연습(반환값처리)

function helloMaker(host){
    let sayHello = function(guest){
        console.log(`${guest}님 반갑습니다.저는 ${host}입니다.`);
    }
    return sayHello;
}

let hong = helloMaker("홍길동");
let lee = helloMaker("이순신");
hong("강감찬");
lee("김돌쇠");