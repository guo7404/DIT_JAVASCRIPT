class Menu{
    constructor(title,price,count){
        this.title = title;
        this.price = price;
        this.count = count;
    }
    intro(){
        console.log(`${this.title}: ${this.price}원 (재고량:${this.count}개)`);
    }
    order(count){
        this.count -= count;
    }
}
let ramyeon = new Menu("라면",1000,100);
ramyeon.count = 200;
ramyeon.intro();// 라면: 1000원 (재고량:100개)
ramyeon.order(2);//재고량에서 2개뺌
ramyeon.intro();
