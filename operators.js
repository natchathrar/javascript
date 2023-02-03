function add() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var res = num1 + num2;
    document.getElementById('result').innerHTML = res;
}
function sub() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var res = num1 - num2;
    document.getElementById('result').innerHTML = res;
}
function mul() { 
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
   var res=num1 * num2;
   document.getElementById('result').innerHTML =res;
}
function div() { 
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
   var res=num1/num2;
   document.getElementById('result').innerHTML =res;
}

