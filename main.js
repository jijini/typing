let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() *stringArr.length)];
//  Math.floor() => 소수점을 버리게 함
let selectStringArr = selectString.split("");
// 해당 문자열을 이 기준을 이용해서 분리 시켜라 
// 이렇게 하면 단어 하나하나가 쪼개져서 배열로 저장됨 

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() *stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}



// 타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
    
}

// 한글자씩 텍스트 출력 함수 
function dynamic(randomArr){
    if(randomArr.length  > 0){
        target.textContent  += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}
// randomArr 이 가지고 있는 첫번째 배열을 shift해서 빼낸것

dynamic(randomString());

//  커서 깜빡임 효과
function blink () {
    target.classList.toggle("active");
}


// 반복하게 하는 함수 
setInterval(blink, 500);