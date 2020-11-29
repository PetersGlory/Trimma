let fname = document.querySelector("#fnames");
let password = document.querySelector("#password");
let ChoiceEmployer = document.querySelector("#ChoiceEmployer");
let ChoiceEmployee = document.querySelector("#ChoiceEmployee");
let employerform = document.querySelector("#employer");
let employeeform = document.querySelector("#employee");
const fullname = () => {
  document.querySelector(".info").innerHTML = "or Company's name";
};
const fullnameout = () => {
  document.querySelector(".info").innerHTML = "";
};
const passwordcheck = () => {
  alert("Hello world");
};
const passwordcheckout = () => {
  alert("hi world");
};
const makeChoice = (id) => {
  if (id == "ChoiceEmployer") {
    employerform.classList.remove("hide");
    employeeform.classList.add("hide");
    ChoiceEmployer.classList.remove("button-notactive");
    ChoiceEmployee.classList.add("button-notactive");
  } else {
    employerform.classList.add("hide");
    employeeform.classList.remove("hide");
    ChoiceEmployer.classList.add("button-notactive");
    ChoiceEmployee.classList.remove("button-notactive");
  }
};
fname.addEventListener("focus", fullname);
fname.addEventListener("focusout", fullnameout);
password.addEventListener("focus", passwordcheck);
password.addEventListener("focusout", passwordcheckout);
ChoiceEmployer.addEventListener("click", () =>
  makeChoice(this.ChoiceEmployer.id)
);
ChoiceEmployee.addEventListener("click", () =>
  makeChoice(this.ChoiceEmployee.id)
);

//Employee's registration section
regEmployee = () =>{
  let pass = document.querySelector("#passwordE");
  let cpass = document.querySelector("#CpasswordE");
  let age = document.querySelector("#age");
  let work = document.querySelector("#work");
  let company = document.querySelector("#companysname");
  let address = document.querySelector("#addressE");
  let mail = document.querySelector("#emailE");
if ( fname !=="" && cpass.value !== "" && pass.value !== "" &&
   age.value !== "" &&
   work.value !== "" &&
   company.value !== "" &&
   address.value !== "" && mail.value !=="") {

 if (pass.value == cpass.value) {
   let obj = {"name":fname.value,
            "company":company.value, 
            "age":age.value, 
            "Iwork":work.value, 
            "add":address.value,
            "mail":mail.value,
            "password"pass.value
          };
   let dbparam = JSON.stringify(obj);
  let regE = new XMLHttpRequest();
  regE.onreadystatechange = ()=>{
    if (this.readyState==4 && this.status == 200) {
      myInfo = JSON.parse(this.responseText);
      document.querySelector("#respondes").innerText = myInfo; 
    }
  };
  regE.open("POST","signupE.php", true);
  regE.setRequestHeader("Content-type", "pplication/x-www-form-urlencoded");
  regE.send("x=" + dbparam);
 } else {
   document.querySelector(".helppassmatch").innerText = "Password does not Match..";
 }
  // console.log(cpass.value + " "+ age.value + " "+work.value +' '+company.value+" "+ address.value+ " "+ mail.value);
} else {
  console.log("Error");
}
}