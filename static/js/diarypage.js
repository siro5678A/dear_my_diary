const tddate = new Date();

var calendarToday = tddate.getDate();

function newBox(a){
    var newDiv = document.createElement( 'div' );
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.style.height='6rem';
    newInput.style.display = 'inline';
    newInput.style.position = 'relative';
    newInput.style.top = '-0.9rem';
    var newText = document.createElement( 'textarea' );
    newText.style.width='90%';
    newText.style.height='5rem';
    newText.style.display = 'inline';
    newText.style.border = 'none'
    newText.style.wrap='physical';
    newDiv.appendChild(newInput);
    newDiv.appendChild(newText);
    document.getElementById(a).appendChild( newDiv );
}

function show0() {document.getElementById("diary0").style.display ="block";}
    function hide0() {document.getElementById("diary0").style.display ="none";}

    function show1() {document.getElementById("diary1").style.display ="block";}
    function hide1() {document.getElementById("diary1").style.display ="none";}

    function show2() {document.getElementById("diary2").style.display ="block";}
    function hide2() {document.getElementById("diary2").style.display ="none";}

    function show3() {document.getElementById("diary3").style.display ="block";}
    function hide3() {document.getElementById("diary3").style.display ="none";}

    function show4() {document.getElementById("diary4").style.display ="block";}
    function hide4() {document.getElementById("diary4").style.display ="none";}

    function show5() {document.getElementById("diary5").style.display ="block";}
    function hide5() {document.getElementById("diary5").style.display ="none";}

    function show6() {document.getElementById("diary6").style.display ="block";}
    function hide6() {document.getElementById("diary6").style.display ="none";}
   

const Todolist = () => {

    

    var calendarYear = tddate.getFullYear();
    // 달력 월
    var calendarMonth = tddate.getMonth() + 1;
    // 달력 일

    var monthLastDate = new Date(calendarYear, calendarMonth, 0);
    // 달력 월의 마지막 일
    var calendarMonthLastDate = monthLastDate.getDate();
    
    // 달력 이전 월의 마지막 일
    var prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0);
    
    // 달력 현재 요일
    var calendarMonthTodayDay = tddate.getDay();


    var arWeek = ["", "", "", "", "", "", ""];
    
    var weekYear = calendarYear;
    var weekMonth = calendarMonth;
    var weekDay = calendarToday;
    // 현재 요일부터 주간 배열에 날짜를 추가
    for (var index = calendarMonthTodayDay; index < 7; index++) {
        arWeek[index] = weekYear +"-" + weekMonth + "-" + weekDay;
        weekDay++;
        // 날짜가 현재 월의 마지막 일보다 크면 다음 월의 1일로 변경
        if (weekDay > calendarMonthLastDate) {
            weekYear = nextMonthStartDate.getFullYear();
            weekMonth = nextMonthStartDate.getMonth() + 1;
            weekDay = 1;
        }
    }
    
    weekYear = calendarYear;
    weekMonth = calendarMonth;
    weekDay = calendarToday;
    // 현재 요일부터 꺼꾸로 주간 배열에 날짜를 추가
    for (var index = calendarMonthTodayDay - 1; index >= 0; index--) {
        weekDay--;
        // 날짜가 현재 월의 1일이면 작으면 이전 월의 마지막 일로 변경
        if (weekDay == 0) {
            weekYear = prevMonthLastDate.getFullYear();
            weekMonth = prevMonthLastDate.getMonth() + 1;
            weekDay = calendarPrevMonthLastDate;
        }
        arWeek[index] = weekYear +"-" + weekMonth + "-" + weekDay;
    }
    
    //console.log(arWeek);


    document.querySelector(".date p").innerHTML = new Date().toDateString();


    

   


    

    

    var days="";
    var Dweek=["sun","mon","tue","wed","thu","fri","sat"];

    for (var i=0 ; i<7; i++){
        days += `<td class="checklist"><div class="wh100" id=${Dweek[i]}><button class="checkplus" onclick="newBox('${Dweek[i]}')">+</button>${arWeek[i]}

        <div id="diary${i}">
        <label for="dia">일기장</label>
        <textarea id="dia" class="dia"></textarea>
        <button onclick="hide${i}()">닫기</button>
        </div>
        </div></td>`;
        
    }


    var diarys="";
    

    for (var i=0 ; i<7; i++){
        diarys += `<td><button class="diarybtn wh100" onclick="show${i}()">diary</button></td>`;
        
    }
    console.log(diarys);
    
    document.querySelector('.todolist').innerHTML = days;
    document.querySelector('.diarys').innerHTML = diarys;
    


}





document.querySelector('.go-prevweek').addEventListener('click',()=>{
    calendarToday=calendarToday-7;
	Todolist()
})

document.querySelector('.go-nextweek').addEventListener('click',()=>{
    calendarToday=calendarToday+7;
	Todolist()
})

Todolist()

