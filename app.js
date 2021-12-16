const CloseBtn = document.getElementById("closeBtn");
const sideNav = document.getElementById("sideMenu");
const hamburger = document.querySelector(".hamburger");
const year = document.getElementById("year");
// toggling  mobile nav.
hamburger.addEventListener("click", () => {
  sideNav.style.width = "100%";
});

CloseBtn.addEventListener("click", () => {
  sideNav.style.width = "0px";
});

// manual image slide


let cards = document.querySelectorAll(".card");
let next = document.getElementById("next");
let prev = document.getElementById("prev")

let left = 0;
next.onclick = () => {
  left++;
  cards.forEach((card) => {
    if (left === 0) {
      card.style.left = "-0px";
    }
    if (left === 1) {
      card.style.left = "-300px";
    }
    if (left === 2) {
      card.style.left = "-620px";
    }
    if (left === 3) {
      card.style.left = "-0px";
    }
    if (left > 2) {
      left = 0;
    }
   
  });
};

prev.onclick = () => {
  left--;
  cards.forEach((card) => {
    if (left === 0) {
      card.style.left = "-0px";
    }
    if (left === 1) {
      card.style.left = "-300px";
    }
    if (left === 2) {
      card.style.left = "-620px";
    }
    if (left === 3) {
      card.style.left = "0px";
    }
    if (left < 0) {
      left = 0;
    }
  });
};

// switching to flow1 page
const buttons = document.querySelectorAll("header button");
const footerBtn = document.querySelector(".connect button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "../chatFlow1/index.html";
  });
});

footerBtn.addEventListener("click", () => {
  window.location.href = "../chatFlow1/index.html";
});

// setting date dynmically for footer
let date = new Date();
year.textContent = date.getFullYear();

//animations
let elements = document.querySelectorAll(".hidden");
let windowHeight = window.innerHeight;

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    element = elements[i];
    let topPos = element.getBoundingClientRect().top;
    if (topPos - windowHeight <= 0) {
      element.classList.add("animate");
      element.classList.remove("hidden");
    } else {
      element.classList.remove("animate");
      element.classList.add("hidden");
    }
  }
}
window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", checkPosition);

//topbar scroll
// const navBar = document.getElementsByTagName("nav");
// navBar[0].style.maxWidth = "1440px";
// window.addEventListener("scroll", () => {
//   if (window.scrollY === 0) {
//     navBar[0].style.backgroundColor = "";
//   } else {
//     navBar[0].style.backgroundColor = "#fff";
//     navBar[0].style.width = "unset";
//   }
// });