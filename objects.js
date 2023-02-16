// const nums=['Natchathra','Narmatha','Nitharshan','Ammu','Appu'];
// let txt = "";
// nums.forEach(myFunction);

// function myFunction(value) {
//   txt = value + "";
//   console.log(txt);
// }
const nums=[{name:'Natchathra',age:25},{name:'Nisha',age:25,},{name:'Nitharshan',age:10}]
let object=nums.length;
for(i=0; i<object; i++){
  console.log('name is:' +" " +nums[i].name + ", "+'age is:' + " "+nums[i].age);
}