var tddate = new Date();

// 달력 연도
var calendarYear = tddate.getFullYear();
// 달력 월
var calendarMonth = tddate.getMonth()+1;
// 달력 일
var calendarToday = tddate.getDate();

var monthLastDate = new Date(calendarYear, calendarMonth, 0);
// 달력 월의 마지막 일
var calendarMonthLastDate = monthLastDate.getDate();

// 달력 이전 월의 마지막 일
var prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0);

// 달력 현재 요일
var calendarMonthTodayDay = tddate.getDay();

// 달력 다음 월의 시작 일
var nextMonthStartDate = new Date(calendarYear, calendarMonth, 1);




function Todolist() {

    //주간 날짜 설정
    var arWeek = [null, null, null, null, null, null, null];


    var addDay = 0;
    for (var index = calendarMonthTodayDay; index < 7; index++) {
        arWeek[index] = new Date(calendarYear, calendarMonth - 1, calendarToday + addDay);
        addDay++;
    }

    var addDay = 0;
    for (var index = calendarMonthTodayDay - 1; index >= 0; index--) {
        --addDay;
        arWeek[index] = new Date(calendarYear, calendarMonth - 1, calendarToday + addDay);
    }


//주간날짜설정 끝

    var today = new Date();
   //날짜 표시

    var days="";

    for (var i=0 ; i<7; i++){
        var year = arWeek[i].getFullYear();
        var month = arWeek[i].getMonth() + 1;
        var day = arWeek[i].getDate();
        var year_month_day = `${year}_${month}_${day}`;
        console.log(year_month_day);

        days += `<td class='tr1_${year}_${month}_${day}'></td>`;


        
        //days += `<td>${year}년 ${month}월 ${day}일</td>`;
    }
    document.querySelector('.todolist').innerHTML = days;

    for (var i=0 ; i<7; i++){
        var year = arWeek[i].getFullYear();
        var month = arWeek[i].getMonth() + 1;
        var day = arWeek[i].getDate();
        $(`.tr1_${year}_${month}_${day}`).html(`${year}년 ${month}월 ${day}일`);
    }
//날짜표시 끝


    var Dweek=["sun","mon","tue","wed","thu","fri","sat"];

    var todo="";

    for(var i=0 ;i<7;i++){
        var year = arWeek[i].getFullYear();
        var month = arWeek[i].getMonth() + 1;
        var day = arWeek[i].getDate();

        todo +=`<td class="checklist " ><div class="wh100" id=${Dweek[i]}>
        <form id ="todoform${year}_${month}_${day}">
        <input class="todoinput" id="todoinput${year}_${month}_${day}" placeholder="할 일을 입력하세요">
        
        <button class="checkplus" id="todobutton${year}_${month}_${day}" >+</button><ul class="tdvals" id="todolist${year}_${month}_${day}" >
        </form>
      </ul></div></td>`

      

        
    }
    document.querySelector('.todo').innerHTML = todo;
    var diarys="";
    
/*
    for (var i=0 ; i<7; i++){
        diarys += `<td><button class="diarybtn wh100" onclick="show${i}()">diary</button></td>`;
        
    }

    
    document.querySelector('.diarys').innerHTML = diarys;
    */

    var n;
    function plus(n){
        var year = arWeek[n].getFullYear();
        var month = arWeek[n].getMonth() + 1;
        var day = arWeek[n].getDate();
        var button = document.getElementById(`todobutton${year}_${month}_${day}`);
        var input = document.getElementById(`todoinput${year}_${month}_${day}`);
        var list = document.getElementById(`todolist${year}_${month}_${day}`);
        var form = document.getElementById(`todoform${year}_${month}_${day}`);
        

        form.addEventListener('submit',function(e){
            e.preventDefault();
            addTodo(input.value);
        })

        //addTodo
        var todoID = `todoinput${year}_${month}_${day}`;

        var todos = [];
        
        /*
        $(button).on("click",  (e)=>{
            e.preventDefault();

            addTodo(input.value);
           
        });

        $(input).on("keypress",function  (e) {
            if(e.which==13&&input.value!==""){
                e.preventDefault();
                addTodo(input.value);
            }
       }); 
       */


            function addTodo(item){
                if(item !==''){
                    const todo = {
                        id: Date.now(),
                        name: item,
                        completed:false
                    };
                
                    todos.push(todo);
                    addToLocalStorage(todos);
                    //renderTodos(todos);
                
                    $(input).val("");
                    $(input).focus();
                }    
                
            }
            
            //end addTodo
    
           
    
           function renderTodos(todos) { //html에 나오게
                
            list.innerhtml="";
            

               todos.forEach(function(item) {
                    const checked = item.completed ? 'checked': null;

                    const li = document.createElement('li');

                    li.setAttribute('class','item');
                    li.setAttribute('datakey', item.id);

                    if (item.completed === true) {
                        li.classList.add('checked');
                        console.log(alert('check'));
                    }
                    

                    li.innerHTML=`<label id="todo${Date.now}"><input type="checkbox" class="checkbox" id="todocheck${Date.now()}" ${checked}>  ${item.name}  </label><button type="submit" class="del-btn" id="del-btn${Date.now()}">삭제</button>`;
    /*
                    $(list).html(`<li class='${item}' datakey='${item.id}' id='td${Date.now()}'><label><input type="checkbox" name="todocheck" id="todocheck${Date.now()}">  ${value}  </label><button class="del-btn" id="del-btn${Date.now()}">삭제</button>`);             */      
                    list.append(li);
               });
           };
        /*
        $(list).on("click",".del-btn",(e)=>{
            $(e.currentTarget).parent().remove();
            
            todos = todos.filter(function(item){
                return item.id !=id;
            })
            addToLocalStorage(todos);
        })*/

        function addToLocalStorage(todos){
            localStorage.setItem(`${todoID}`, JSON.stringify(todos));
            renderTodos(todos);
        }

        function getTodo(){
            var reference = localStorage.getItem(`${todoID}`);
            if(reference){
                todos=JSON.parse(reference);
                renderTodos(todos);
                
            }
        }

        function toggle(id) {
            todos.forEach(function(item) {

              if (item.id == id) {
                item.completed = !item.completed;
              }
            });
          //addToLocalStorage(todos);
          }


        function deleteTodo(id) {

            todos = todos.filter(function(item) {
            return item.id != id;
              
            });
            addToLocalStorage(todos);
        }

        getTodo();
        
        
        $(list).on('click',".del-btn", (e)=> {
            if(e.target.classList.contains('del-btn')){
                $(e.currentTarget).parent().remove();
                deleteTodo(e.target.parentElement.getAttribute('datakey'));
            }
          });

          $(list).on('click','.checkbox', (e)=>{
            if (e.target.type === 'checkbox') {
                toggle(e.target.parentElement.getAttribute('datakey'));
              }
          })



/*
        $(list).on("click",".del-btn",(e)=>{
            $(e.currentTarget).parent().remove();
            if(e.target.classList.contains('del-btn')){
                deleteTodo(e.target.parentElement.getAttribute('datakey'));
            }
        });*/

    } 
    //end plus()
    

    for(var i =0 ; i<7;i++){
        plus(i);

  }


    

}
//end Todolist()





$(document).ready(function(){
    $('.go-prevweek').click(function(){
        calendarToday=calendarToday-7;
        Todolist()
    })
    
   $('.go-nextweek').click(function() {
        calendarToday=calendarToday+7;
        Todolist()
    })
    Todolist();
});




