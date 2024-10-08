// JS에서 난수 처리는 Math객체의 메소드 random()을 이용한다.

//math.random()은 [0, 1) 0<=n<1 범위의 난수를 생성한다.

//min <= n <max 범위의 정수형 난수 생성하기
function rangeRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

let fruits = ["사과","배","포도","샤인머스켓","감","키위"];

let fruitBox = [];

let farmer = function() {
    let nextFruitIndex = rangeRandomInt(0,fruits.length-1); //생산할 과일을 임의로 뽑는다
    fruitBox.push(fruits[nextFruitIndex]);
    console.log(`${fruits[nextFruitIndex]}를 생산하여 과일 박스에 추가하였습니다.`);
}

setTimeout(farmer,rangeRandomInt(1,5)*1000);

// for(let i=1;i<=10;i++)
//     console.log(rangeRandomInt(-10,-1));
for(let i=0;i<10;i++)
    farmer();

console.log(fruitBox);