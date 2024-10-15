//생성자 함수 정의 (생성자 함수명은 대문자로 시작한다.)
function Product(name,price){
    //이 위치에서 this 이름의 빈 객체가 하나 생성 된다.
    this.name = name;
    this.price = price;
    this.intro = function(){
        console.log(`[${this.name}]:(${this.price}원)`);
    }
}

//생성자 함수를 이용하여 객체(instance)등을 생성한다.

let p1 = new Product("볼펜",500);
let p2 = new Product("노트북",200000);
let p3 = new Product("자동차",5000000);
p1.intro();
p2.intro();
p3.intro();