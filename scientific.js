function cal(val)
{
    document.getElementById('res').value =val;
}
function v(val)
{
    document.getElementById('res').value += val;
}
function sin(val) {
    return Math.sin(val);
  }
  
  function cos(val) {
   return Math.cos(val);
  }
  function tan(val) {
    return Math.tan(val);
  }
  function log(val) {
    return Math.log10(val);
  }
  
 function square(){
  res.value=Math.pow(res.value,2)
 }
  
  function sqrt(val) {
    return Math.sqrt(val);
  }
//   function equal(val){
//     try{
//         cal(eval(document.getElementById('res').value));
//     }
//     catch(equal)
// {
//     cal('Error');
// }
// }
  

const backspace = () => {
  res.value = res.value.slice(0, -1);
};
const calculate = () => {
  res.value = eval(res.value);
};
document.querySelector(".button-e").addEventListener("click", () => {
  v(Math.E);
});

document.querySelector(".button-pi").addEventListener("click", (val) => {
  v(Math.PI);
});

  function fact(val) {
    if (val === 0) {
      return 1;
    }
    return val * fact(val - 1);
  }

 