//240924 화
let ar = [23,4,235,12,65,33,46,87,77,98];

//배열 ar에서 원소를 하나씩 꺼내서 홀수,짝수 판별 결과에 따라 해당 배열에 넣는다.
let odd = []; // 홀수 저장용 배열
let even = []; //짝수 저장용 배열

//for-of 반복문 사용하기
for(let i of ar){
    if(i%2 == 1){odd.push(i)}
    else{even.push(i)}
}

//최종 결과 배열 2개 , odd, even 출력하기
console.log(`홀수 : ${odd}`);
console.log(`짝수 : ${even}`);