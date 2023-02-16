let form = document.getElementById('form').value;

// var submit = document.getElementById('submit');
// submit.addEventListener("click", display);

let list1=[];
 let list=[];

function validate() {
    let username = document.getElementById('names').value;
    let number = document.getElementById('Phone').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[type="radio"]:checked');
    let genderValue = (gender) ? gender.value : "";
    let address = document.getElementById('address').value;
    let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (username == "") {
        document.getElementById("err").innerHTML = "* Please Enter Your Name";
    }
    else {
        document.getElementById("err").innerHTML = "";
    }
    if (!isValidEmail(email)) {
        if (email == "") {
            document.getElementById("err1").innerHTML = "* Please Enter your Email Id";
        }
        else {
            document.getElementById("err1").innerHTML = "**** Please Enter valid Email Id";
        }
    }
    else {
        document.getElementById("err1").innerHTML = "";
    }

    if (number.match(phoneNum)) {
            document.getElementById("err2").innerHTML = "";
        }
        else if(number=="") {
            document.getElementById("err2").innerHTML = "* Please Enter your  phonenumber";
        }  
    else {
        document.getElementById("err2").innerHTML = "*****  Please Enter valid phonenumber";
    }
    if (dob == "") {
        document.getElementById("err3").innerHTML = "* Please Enter Your Date of Birth";
    }
    else {
        document.getElementById("err3").innerHTML = "";
    }
    if (!gender) {
        document.getElementById("err4").innerHTML = "* You must select the gender ";
    }
    else {
        document.getElementById("err4").innerHTML = "";
    }
    if (address == "") {
        document.getElementById("err5").innerHTML = "* Please give Your address";
    }
    else {
        document.getElementById("err5").innerHTML = "";
    }

    let result =
    {
        'Names': username, 'Email': email, 'Phone': number, 'Dob': dob, 'Gender': genderValue, 'Address': address
    }
    console.table(result);
    

    if(username && email && number && dob && genderValue && address)
    {
      list.push(result);
      localStorage.setItem("output",JSON.stringify(list));
      display()
    }
   else
   {
    console.log('');
   }
}

function display(){
    let row="";
    list=JSON.parse(localStorage.getItem("output"));
    list1.push(list);
    console.log(list1);
    for (var i = 0; i < list.length; i++) {

        row +=
            `<tr>
        <td>${list[i].Names}</td>
        <td>${list[i].Email}</td>
        <td>${list[i].Phone}</td>
        <td>${list[i].Dob}</td>
        <td>${list[i].Gender}</td>
        <td>${list[i].Address}</td>
        </tr>`
    }
            
            document.getElementById("table").innerHTML = row;
            document.getElementById('form').reset();
        }

  