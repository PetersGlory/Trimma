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
  // alert("Hello world");
};
const passwordcheckout = () => {
  // alert("hi world");
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

