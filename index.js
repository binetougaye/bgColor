// Variables
let mdp = document.getElementById("mdp");
let mdp2 = document.getElementById("mdp2");
let btn = document.getElementById("btn");
let container = document.getElementById("container");
let body = document.querySelector("body");
// Error
let passwordError = document.getElementById("passwordError");
let mdp1 = document.getElementById("mdp1");
let btnError = document.getElementById("btnError");

// btn.addEventListener("click", function () {
//   //
//   if (mdp.value.length === 0 || mdp2.value.length === 0) {
//     mdp1.innerHTML = "Password is required";
//     mdp1.style.fontSize = "12px";
//     mdp1.style.color = "red";
//     passwordError.innerHTML = "Password is required";
//     passwordError.style.fontSize = "12px";
//     passwordError.style.color = "red";
//   } else if (isNaN(mdp.value) || isNaN(mdp2.value)) {
//     mdp1.innerHTML = "Wrong caracters, please type numbers";
//     mdp1.style.fontSize = "12px";
//     mdp1.style.color = "red";
//     passwordError.innerHTML = "Wrong caracters, please type numbers";
//     passwordError.style.fontSize = "12px";
//     passwordError.style.color = "red";
//   } else if (mdp.value.length < 10 || mdp2.value.length < 10) {
//     mdp1.innerHTML = "Password must be at least 10 caracters";
//     mdp1.style.fontSize = "12px";
//     mdp1.style.color = "red";
//     passwordError.innerHTML = "Password must be at least 10 caracters";
//     passwordError.style.fontSize = "12px";
//     passwordError.style.color = "red";
//   }
//   //
//   else if (mdp2.value !== mdp.value) {
//     passwordError.innerHTML = "Passwords doesn't match";
//     passwordError.style.fontSize = "12px";
//     passwordError.style.color = "red";
//     mdp2.style.borderColor = "red";
//     mdp.style.borderColor = "red";
//   } else {
//     container.style.display = "none";
//     body.innerHTML =
//       "Formulaire soumis avec succès <img src='icon-complete.svg'>";
//   }
// });
function validatePassword1() {
  if (mdp.value.length == 0) {
    mdp1.innerHTML = "Password is required";
    mdp1.style.color = "red";
    mdp1.style.fontSize = "12px";
  } else if (isNaN(mdp.value)) {
    mdp1.innerHTML = "You must write numbers";
    mdp1.style.color = "red";
    mdp1.style.fontSize = "12px";
  } else if (mdp.value.length < 10) {
    mdp1.innerHTML = "Password must be at least 10 caracters";
    mdp1.style.color = "red";
    mdp1.style.fontSize = "12px";
  } else {
    mdp1.innerHTML = "Correct";
    mdp1.style.color = "green";
    mdp1.style.fontSize = "12px";
  }
}
//

//
function validatePassword2() {
  if (mdp2.value.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.style.color = "red";
    passwordError.style.fontSize = "12px";
  } else if (isNaN(mdp2.value)) {
    passwordError.innerHTML = "You must write numbers";
    passwordError.style.color = "red";
    pas.style.fontSize = "12px";
  } else if (mdp2.value.length < 10) {
    passwordError.innerHTML = "Password must be at least 10 caracters";
    passwordError.style.color = "red";
    passwordError.style.fontSize = "12px";
  } else if (mdp.value !== mdp2.value) {
    passwordError.innerHTML = "Passwords doesn't match";
    passwordError.style.color = "red";
    passwordError.style.fontSize = "12px";
  } else {
    passwordError.innerHTML = "Correct";
    passwordError.style.color = "green";
    passwordError.style.fontSize = "12px";
  }
}
//
btn.addEventListener("click", function () {
  if (
    mdp.value.length !== 0 &&
    mdp2.value.length !== 0 &&
    isNaN(mdp.value) === false &&
    isNaN(mdp2.value) === false &&
    mdp.value >= 10 &&
    mdp2.value >= 10
  ) {
    container.style.display = "none";
    body.innerHTML =
      "Formulaire soumis avec succès <img src= 'icon-complete.svg'>";
  } else {
    btnError.innerHTML = "Please fix errors";
    btnError.style.color = "red";
    btnError.style.fontSize = "12px";
  }
});
