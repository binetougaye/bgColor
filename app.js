// // Variables
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let button = document.getElementById("btn");
let body = document.querySelector("body");
button.addEventListener("click", function () {
  body.style.backgroundColor = input.value;
});
// let container = document.getElementById("container");
// let table = document.getElementById("table");
// // let test = document.getElementById("test");
// // let me = document.getElementById("me");
// // Event Listener
// button.addEventListener("click", function () {
//   let tab = [];
//   for (i = 1; i < 11; i++) {
//     let calcul1 = input.value * i;
//     let calcul2 = input2.value * i;
//     tab.push(calcul1 + "calc1");
//     console.log(tab);

//     // console.log(input.value + "*" + i + "=" + calcul);
//   }
// });
// button.addEventListener("click", function () {
//   // let Date1 = new Date();
//   // console.log(Date1);
//   // let thisDate = Date1.getUTCDay(input.Value);
//   // console.log(thisDate);
//   console.log(input.value);
//   let test = new Date(input.value);
//   console.log(test);
//   let getTheDay = test.getDate();
//   console.log(getTheDay); // output 25
//   //
//   console.log(input2.value);
//   let Test = new Date(input2.value);
//   console.log(Test);
//   let thisDate = Test.getDate();
//   console.log(thisDate);
//   if (getTheDay > thisDate) {
//     // console.log("true");
//     let diff = getTheDay - thisDate;
//     console.log(diff);
//   }
// });
