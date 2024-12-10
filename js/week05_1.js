//매개변수 초기화
function welcome(guest="손",host="홍길동"){
    return console.log(`어서오세요. ${guest}님. 저는 ${host}입니다.`);
}

function tagString(content="",tag="p",classs=""){
    // console.log(`${content}`);
    // console.log(`<${tag}>${content}</${tag}>`);
    if(classs=="")
        return console.log(`<${tag}>${content}</${tag}>`);
    return console.log(`<${tag} class = "${classs}">${content}</${tag}>`);
    
    
}

tagString("Hello"); //<p>Hello</p>
tagString("Hello","div")//<div>Hello</div>
tagString("Hello","h1","maintitle"); //<h1 class="maintitle">Hello<h/1>