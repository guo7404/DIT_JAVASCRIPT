//setInterval(함수, 시간)
//시간마다 함수를 반복 호출해주는 일정을 시스템에 등록

let alram = function(){
    console.log("wake up!!!");
}

let keyInterval = setInterval(alram, 1000);

let stopAlram =function(){
    clearInterval(keyInterval);
    console.log("stopped alrams~");
}

setTimeout(stopAlram, 5000);