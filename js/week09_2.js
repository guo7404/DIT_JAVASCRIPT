// class 정의 및 활용 연습
// 자동차 클래스 (car)

// 속성
// -----------------------
// id : 자동차 객체들을 구분하기 위한 id
// gasTank : (단위 liter)연료탱크 용량, 주유시 초과할 수 없는 양
// gas : (단위 liter)현재 gasTank의 남아있는 연료 양, 주행하면 줄어듬
// kmpl : 연비 km/liter
// odoMeter : 출고이후 총 주행거리
// tripMeter : 사용자가 리셋 이후 달린 거리

// 메서드
// -----------------------
// drive(distance=10); distance km만큼 주행 지시. (oddMeter, tripMeter에 distance 합산, 연료 소모처리, gas량 check)
// fuelling(liter="FULL"); gas += liter, FULL 처리할 것.
// status(); id, odoMeter, gas, 남은 주행 가능 거리
// resetTripMeter(); //tripMeter = 0

class car{
    constructor(id,gasTank=60,gas=10,kmpl=10){
        this.id = id;
        this.gasTank = gasTank;
        this.gas = gas;
        this.kmpl = kmp1;
        this.odoMeter = 0;
        this.tripMeter = 0;
    }
    //-------------------------------------------
    // [ID]:(Odo/Trip: 23/4km)(Gas:10 liter)
    status(){
        console.log(`[${this.id}]: (Odo/Trip: ${this.odoMeter}/${this.tripMeter}) (Gas: ${this.gas}liter)`)
    }
    drive(distance=10){
        if(this.gas <= 0){ //주행 불가 상황
            console.log(`${this.id}]: 주행불가능(연료 없음)`);
            this.status();
            return 0;
        }
        let usedGas = distance/this.kmpl
        //필요한 연료량이 있는지 확인
        if(usedGas > this.gas){ //연료가 부족할 경우에는 요구한 주행거리가 아닌 남은 연료로 갈수있는 거리 재계산
            distance = this.gas * this.kmpl;
            usedGas = this.gas;
            console.log(`[${this.id}]: 연료 부족으로 주행거리 축소: (${distance} km)`);
        }

        this.gas -= usedGas;
        this.odoMeter += distance;
        this.tripMeter += distance;

        console.log(`[${this.id}]: 주행(${distance}km)`);
        this.status();
        return distance;
    }
    //-------------------------------------------
    //-------------------------------------------
    
}

let c1 = new car("K5");
c1.status();
c1.drive();
c1.status();