function rangeRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

let fruits = ["사과","배","포도","샤인머스켓","감","키위"];

let fruitBox = [];
let keyFarmer; //다음 생산자 일정 등록키값 저장용
let keyConsumer; //다음 구입 일정 등록키값 저장용

let farmer = function() {
    let nextFruitIndex = rangeRandomInt(0,fruits.length-1); //생산할 과일을 임의로 뽑는다
    fruitBox.push(fruits[nextFruitIndex]);
    console.log(`${fruits[nextFruitIndex]} => [${fruitBox}]`);
    //다음 생성할 일정을 등록한다.
    let nextTime = rangeRandomInt(2,7)*1000;
    setTimeout(farmer,nextTime);
    keyFarmer = setTimeout(farmer,nextTime);
}
let consumer = function(){
    if(fruitBox.length > 0){ //과일 박스에 과일이 있을 때만 구입을 시도한다.
        let fruit = fruitBox.shift(); //과일 박스의 앞에 있는 과일 1개를 꺼낸다.(배열에서 제거)
        console.log(`구입:[${fruit}] => [${fruitBox}]`);
    }
    let fruit = fruitBox.shift();  //과일박스의 앞에 있는 과일 1개를 꺼낸다.(배열에서 제거)
    console.log(`구입:[${fruit}] => [${fruitBox}]`);
    //다음 구입할 일정을 등록한다
    let nextTime = rangeRandomInt(2,7)*1000;
    setTimeout(farmer,nextTime);
    keyConsumer = setTimeout(consumer,nextTime);
}
function stopSimulation(){
    clearInterval(keyFarmer);
    clearInterval(keyConsumer);
    console.log("생산-구입 시뮬레이션이 종료되었습니다.");
    console.log(`남은과일 : ${fruitBox}`);

}

farmer(); //생산시작
consumer(); //소비시작
setTimeout(farmer,3000);