// Variables
let input1 = document.getElementById("input1");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
// LOGIC
btn.addEventListener("click", function () {
  let Today = new Date(input1.value);
  let getYear = Today.getFullYear();
  console.log(getYear);
  // An actu
  let year = new Date();
  let anActu = year.getFullYear();
  console.log(anActu);
  // Mois
  let today = new Date(input1.value);
  let getMonth = today.getMonth();
  console.log(getMonth);
  //  Mois actu
  let month = new Date();
  let moisActu = month.getMonth();
  console.log(moisActu);
  // JOUR
  let days = new Date(input1.value);
  let getDays = days.getDate();
  console.log(getDays);
  // Jour actu
  let jour = new Date();
  let jourActu = jour.getDate();
  console.log(jourActu);
  // Calcul age
  let age = anActu - getYear;
  let ageMois = moisActu - getMonth;

  let ageJours = ageMois * 30;
  console.log(ageJours);
  text.innerHTML = `Vous avez ${age} ans ${ageMois} mois ${ageJours} jours`;
});
// 1 mois 30 jours
// 9 * 30
