function myFunction() {
  let a = parseInt(document.getElementById('num1').value);
  let b = parseInt(document.getElementById('num2').value);
  if (a > b) {
    message = "Value1 is greater";
  } 
  else if(a < b)
  {
    message = "Value2 is greater";
  }
  else
  {
    message = "Equal values";
  }
  document.getElementById("res").innerHTML = message;
}