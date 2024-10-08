//익명함수 활용하기

// let doubleX = function(n) {
//     return n * 2;
// }
// let dx = doubleX(200);

// console.log(dx);
//----------------------------
// let sumArray = function(ar) {
//     let sum = 0;
//     for(let item of ar){
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumArray([3,4,5,6]));
//------------------------------
//매개변수 배열 ar의 모든 요소가 number이면 true, 아니면 false 반환하기
let isAllNumber = function(ar){
    for(let item of ar){
        if(typeof(item)!='number')
            return false;
    }
    return true;
}
// console.log(isAllNumber([1,2,3,4,'dit']));
//------------------------------

let sumArray = function(ar){
    let sum = 0;
    //매개변수 ar의 모든 원소가 number인지 먼저 검증하는 처리를 한다(isAllNumber 활용)
    
    return sum;
}
// console.log(isAllNumber([1,2,3,4,'dit']));
//------------------------------
let max = (a,b) => {return(a>b)? a:b;}
//------------------------------
let max2 = (a,b,c) =>{
    if (a>b){
        if(a>c){
            return a;
        }
    }else if(b>a){
        if(b>c){
            return b;
        }
    }
    return c;
}
//-----------------------------
let max3 = (a,b,c) =>{
    if(a>b)
        return max(a,c)
    else
    return max(b,c)
}

// console.log(max3(3325,223,444));
//-----------------------------

let maxValue = (ar) =>{
    let max = ar[0];
    for(let i=1;i<ar.length;i++){
        if(ar[i]>max)
            max = ar[i];
        i++;
        }
        return max;
    }
console.log(maxValue([-12,-2,-31,-4,-5]));