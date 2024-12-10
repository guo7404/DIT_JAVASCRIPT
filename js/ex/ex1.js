// //for 반복문 연습문제
// let i=[17,2,3,4,5];
// for(let item=i.length;item>0;item--){
//     console.log(i[item-1]);
// }

// //for/for in/for of 연습문제
// let arr = [3,"DIT",false,undefined,{},function(){}];

// for(let i=0;i<arr.length;i++){
//     console.log(`arr[${i}]=${arr[i]},(${typeof(arr[i])})`)
// }

// //홀수만 출력
// let arr2 = [3,32,53,48,49];

// for(let i in arr2){
//     if(arr2[i]%2!=0)
//         console.log(`${arr2[i]}`)
// }

// //홀짝구분해서 저장
// let odd = [];//홀
// let even = [];//짝
// for(let item of arr2){
//     if(item%2==1){
//         odd.push(item);
//     }else{
//         even.push(item);
//     }
// }
// console.log(`${odd}`);
// console.log(`${even}`);

let arr = [3,14,5,35,54,15,785,7,1];
let sum =0;
// let i = 0;
// while(sum<100){
//     sum += arr[i];
//     i++;
//     if(sum>100){
//         sum -= arr[i-1];
//         i--;
//         break;
//     }
// }
// console.log(`요소 ${i+1}개의 합계 ${sum}`);

//shift unshift 이용하기
while(arr.length>0){
    let i = arr.shift();
    sum += i;
    if(sum>100){
        sum -= i;
        arr.unshift(i);
        break;
    }
}
console.log(`sum of ar = ${sum}`);