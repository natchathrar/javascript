function cal(val)
{
document.getElementById("res").value=val;
}
function v(val)
{
document.getElementById("res").value+=val;
}
function equal() 
{ 
try 
{ 
  cal(eval(document.getElementById("res").value)) 
} 
catch(equal) 
{
  cal('Error') 
} 
}