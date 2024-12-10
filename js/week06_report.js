// 타이머 함수 응용 연습 과제

// 1. 생산자(farmer)는 랜덤 간격(2~7초)으로 과일명 리스트에서 임의로 하나씩 생산하여 fruitBox에 담는다.
//    - 담을 때마다 담은 후의 fruitBox 표시
//    - 담고 나면 다음 생산할 일정을 예약하기
// 2. 소비자(consumer)는 랜덤 간격(2~7초)으로 fruitBox에서 하나씩(앞에서부터) 꺼낸다. (꺼낸  과일은 먹은 것으로 처리 ^^)
//    - 1개 꺼낸 후의 fruitBox표시
//    - 다음 꺼낼 일정을 예약하기
//    - fruitBox에 담긴 과일이 없으면 다음 꺼낼 일정만 예약하기
// 3. 1분 정도의 시뮬레이션이 끝나면 생산자와 소비자 함수의 동작을 모두 중단하고 시뮬레이션을 중단한다.

function rangeRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

let fruits = ["사과","배","포도","샤인머스켓","감","키위"];

let consumerBag = [];

let fruitBox = [];

// let keyTimeOut = setTimeout(()=>{console.log("Booom~");},3000);
// console.log("boom set");

let farmer = function() {
    let nextFruitIndex = rangeRandomInt(0,fruits.length-1); //생산할 과일을 임의로 뽑는다
    fruitBox.push(fruits[nextFruitIndex]);
    console.log(`farmer : ${fruits[nextFruitIndex]}를 생산하여 과일 박스에 추가하였습니다.`);
    // console.log(`과일박스 : ${fruitBox}`);
}
let consumer = function() {
    if(fruitBox[0]==undefined){
        console.log("consumer : fruitBox에 꺼낼 과일이 없습니다.");
    }else{
        console.log(`consumer : ${fruitBox[0]}를 장바구니에 담았습니다.`);
    }

    let hand = fruitBox.shift();
    if(hand!=undefined)
        consumerBag.push(hand);
    // console.log(`과일박스 : ${fruitBox}`);
    
}

let farmerInterval = setInterval(farmer,rangeRandomInt(2000,7000));
let consumerInterval = setInterval(consumer,rangeRandomInt(2000,7000));

let stopInterval = function(){
    clearInterval(farmerInterval);
    clearInterval(consumerInterval);
    if(fruitBox[0] == undefined){
        console.log("장사끝");
    }else{
        console.log(`과일박스 : [${fruitBox}]`);
    }
    console.log(`장바구니 : [${consumerBag}]`)
}

setTimeout(stopInterval,60000);