let inputDate = document.getElementById("input");
console.log(typeof inputDate);
let inputDate2 = document.getElementById("input2");
let btn = document.getElementById("btn");
let error = document.getElementById("error");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let container = document.getElementById("container");
// console.log(inputDate.value);
// let dateValue = inputDate.value;
// console.log(dateValue);
// let dateObj = new Date();
// let day = dateObj.getFullYear();
// console.log(day);
btn.addEventListener("click", function (e) {
  if (Number(inputDate.value) > Number(inputDate2.value)) {
    alert("erreur");
    // error.innerHTML = " erreur";
  } else {
    let ageEnJours = inputDate.value * 365;
    text1.innerHTML = "Vous avez vécu " + ageEnJours + " jours";
    let diff = Number(inputDate2.value) - Number(inputDate.value);
    let enJours = diff * 365;
    text2.innerHTML =
      "Il vous reste " +
      enJours +
      " jours" +
      " pour avoir " +
      inputDate2.value +
      " ans";
  }
});
