let modal1 = document.getElementById("modaldefault");
let modal1bg = document.getElementById("black");
let enter = document.getElementById("enter");
let continued = document.getElementById("broke");
let price = document.getElementById("none1");
let enters = document.getElementById("enters");
let prices = document.getElementById("none2");
let hr = document.getElementById("hr");
let hr2 = document.getElementById("hr2");
let circle = document.getElementById("circle");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let borders = document.getElementById("border1");
let border1 = document.getElementById("border");
let borders2 = document.getElementById("border2");
let pledge25 = document.getElementById("amount25");
let pledge = document.getElementById("amount");
let thanks = document.getElementById("tnx");
let thankspg = document.getElementById("tnx1");
let ham = document.getElementById("ham");
let mobileMenu = document.getElementById("mobileMenu");
let closeMenu = document.getElementById("closed");

function phoneMenu() {
  ham.style.display = "none";
  mobileMenu.style.display = "block";
  closeMenu.style.display = "block";
}
function closeDisplay() {
  ham.style.display = "block";
  mobileMenu.style.display = "none";
  closeMenu.style.display = "none";
}
function modalEmpty() {
  modal1.style.display = "block";
  modal1bg.style.display = "block";
  // setTimeout(modalEmpty,5000)
  // modalEmpty()
}
function cancel() {
  modal1.style.display = "none";
  modal1bg.style.display = "none";
  console.log("canceled");
}
console.log("active");
console.log(modalEmpty);
function entered() {
  enter.style.display = "flex";
  price.style.display = "block";
  hr.style.display = "block";
  circle.style.display = "block";
  continued.style.display = "none";
  borders.style.border = "2px solid hsl(176, 50%, 47%)";
  console.log("sharp");

  enters.style.display = "none";
  prices.style.display = "none";
  circle2.style.display = "none";
  borders2.style.border = "2px solid gainsboro";
  hr2.style.display = "none";
  circle3.style.display = "none";
  border1.style.border = "2px solid gainsboro";
}
function entre() {
  enters.style.display = "flex";
  prices.style.display = "block";
  circle2.style.display = "block";
  borders2.style.border = "2px solid hsl(176, 50%, 47%)";
  hr2.style.display = "block";
  console.log("sharp");
  enter.style.display = "none";
  price.style.display = "none";
  hr.style.display = "none";
  circle.style.display = "none";
  borders.style.border = "2px solid gainsboro";
  circle3.style.display = "none";
  border1.style.border = "2px solid gainsboro";
  continued.style.display = "none";
}
function ent() {
  circle3.style.display = "block";
  border1.style.border = "2px solid hsl(176, 50%, 47%)";
  enter.style.display = "none";
  price.style.display = "none";
  hr.style.display = "none";
  circle.style.display = "none";
  borders.style.border = "2px solid gainsboro";
  enters.style.display = "none";
  prices.style.display = "none";
  circle2.style.display = "none";
  borders2.style.border = "2px solid gainsboro";
  hr2.style.display = "none";
  continued.style.display = "block";
}
function thankYou() {
  thanks.style.display = "block";
  modal1.style.display = "none";
  thankspg.style.display = "block";
  modal1bg.style.display = "none";
  // setTimeout(thankYou, 2000);
}
function gotIt() {
  thanks.style.display = "none";
}
function border() {
  pledge.style.border = "1px solid  hsl(176, 72%, 28%)";
  pledge25.style.border = "1px solid  hsl(176, 72%, 28%)";
}
// console.log(entered);
function load() {
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("modaldefault");

    preloader.style.display = "none";
    content.style.display = "block";
  });
  // setTimeout(load,2000);
}
load();
const thank = document.getElementById("tnx");
const modalFirst = document.getElementById("black");
const loader = document.getElementById("form-preloader");

// thank.addEventListener("submit", function (e) {
//   loader.style.display = "flex";
//   thank.style.display='none'

//   setTimeout(() => {
//     loader.style.display = "none";
//     form.reset();
//   }, 5000);
// });
