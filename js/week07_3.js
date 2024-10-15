//Product class 정의
class Product {
    //객체 생성용 함수
    constructor(name, price){ //사용x 호출할땐 클래스이름으로 호출
        this.name = name;
        this.price = price;
        this.판매처;
    }
    //객체들이 공유할 메서드 정의
    intro(){
        console.log(`[${this.name}] : (${this.price})원 (판매처 : ${this.판매처})`);
    }
}
//-------------------------------------------
//위에서 정의한 class Product를 이용하여 객체(instance)들을 생성하기
let p1 = new Product("볼펜",50000); //p1변수는 주소를 가르킴
let p2 = new Product("샤프",30000);
p1.intro();
p2.intro();
p1.판매처 = "DIT";
p2.판매처 = "KOREA";
p1.intro();
p2.intro();