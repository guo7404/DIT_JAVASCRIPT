//배열 요소들의 합계 계산하여 출력하기
let ar = [23,43,6,43,12,58,78,77,90,5];
let sum = 0; //합계 계산용 변수 선언

//while 반복문을 이용하여 배열의 합계 계산하기
//합계가 100을 넘지 않는 최대값이 되는 지점 출력하기
while(ar.length > 0){
    let i = ar.shift();
    sum += i
    if(sum>100){
        sum -= i;
        ar.unshift(i);
        break;
    }
    }
//결과 출력
console.log(`sum of ar = ${sum}`);