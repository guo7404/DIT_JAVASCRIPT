//JS 객체 정의하기(리터럴 객체)
let st = {
    name:'김현준',
    "사는 주소" : "부산광역시영도구함박꽃길2",
    age:20,
    code:202248112,
    dept:'캄푸타소푸투에어과',
    subject:{
        "교양 과목":["일본어","영어","미술심리치료"],
        전공과목:["프론트","자바","디비"]
    }
}

console.log(st.name+" "+st.age+" "+st.code+" "+st.dept+" "+st["사는 주소"]+" "+st.subject["교양 과목"][1]+" "+st.subject.전공과목);