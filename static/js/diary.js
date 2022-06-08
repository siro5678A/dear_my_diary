function show() {document.getElementById("diary").style.display ="block";}
function hide() {document.getElementById("diary").style.display ="none";}

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