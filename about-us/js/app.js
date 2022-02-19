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

// switch to counsellors page
// let gotoGallery = document.getElementById("goto_gallery");
// gotoGallery.addEventListener("click", () => {
//   window.location.href = "../gallery/gallery.html";
// });

// manual image slide
let cards = document.querySelectorAll(".card");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
// work on setting the left arrow.
let left = 0;
next.onclick = () => {
  left++;
  // if (left > 0 && left === 2) {
  //   next.onclick = "null";
  //   next.style.backgroundImage = "url(./assets/backSwitch.png)";
  //   next.style.transform = "rotate(-180deg)";
  // }
  //   console.log(left);

  cards.forEach((card) => {
    if (left === 0) {
      card.style.left = "-0px";
    }
    if (left === 1) {
      card.style.left = "-300px";
    }
    if (left === 2) {
      card.style.left = "-600px";
    }
    if (left === 3) {
      card.style.left = "-900px";
    }
    if (left === 4) {
      card.style.left = "-1200px";
    }
    if (left === 5) {
      card.style.left = "-1500px";
    }
    if (left === 6) {
      card.style.left = "-1800px";
    }
    if (left === 7) {
      card.style.left = "-2100px";
    }
    if (left === 8) {
      card.style.left = "-2400px";
    }
    if (left === 9) {
      card.style.left = "-2700px";
    }
    if (left === 10) {
      card.style.left = "-3000px";
    }
    if (left > 10) {
      left = 0;
      card.style.left = "0px";
    }
  });
};

// work to do here.
prev.onclick = () => {
  left--;
  if (left > 0) {
    //  prev.onclick = "null";
    prev.style.backgroundImage = "url(../assets/forwardSwitch.png)";
    prev.style.transform = "rotate(-180deg)";
  }
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
      card.style.left = "-920px";
    }
    if (left === 4) {
      card.style.left = "-1200px";
    }
    if (left === 5) {
      card.style.left = "-1400px";
    }
    if (left === 6) {
      card.style.left = "0px";
    }
    if (left < 0) {
      left = 0;
    }
  });
};

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

// switching to flow1 page
// const buttons = document.querySelectorAll("header button");
// const footerBtn = document.querySelector(".connect button");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     window.location.href = "../chatFlow1/index.html";
//   });
// });

// footerBtn.addEventListener("click", () => {
//   window.location.href = "../chatFlow1/index.html";
// });
// switching users

// const user = document.querySelector('.users')
const avatars = document.querySelectorAll(".avatar");
let mainComment = document.querySelector(".main-comment h2");
const comments = [
  "I came to the platform with a heavy heart, but the councellors are \
    caring and loving, i dismissed my suicide though at once, Thank you \
    ZeroDepression Team",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
  Voluptates sequi eius reprehenderit similique \
  exercitationem error dolor fugit voluptatum deleniti ex.",

  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse facilis quidem similique alias molestias aperiam.",
];

avatars.forEach((avatar) => {
  avatar.addEventListener("click", (e) => {
    avatars.forEach((avatar) => {
      avatar.classList.remove("active-user");
    });
    e.currentTarget.classList.add("active-user");
    let id = parseInt(e.currentTarget.getAttribute("data-user"));

    mainComment.textContent = comments[id];
  });
});

// auto switch comments

function switchComments() {
  let count = 0;
  setInterval(() => {
    if (count > 2) {
      count = 0;
    }
    avatars.forEach((avatar, index) => {
      avatar.classList.remove("active-user");
      if (count === index) {
        avatar.classList.add("active-user");
        mainComment.textContent = comments[index];
      }
    }),
      count++;
  }, 2500);
}

window.addEventListener("DOMContentLoaded", () => {
  switchComments();
});

// submitting subscribe form

const url = "https://api.zerodepression.org/v1/ge/newsletter";

const subscriberName = document.getElementById("name");
const subscriberEmail = document.getElementById("email");
const subscribe = document.getElementById("subscribe");
const error = document.querySelector(".subscribe .error");
let subscriber = {
  first_name: "",
  email: "",
};

subscribe.addEventListener("click", () => {
  if (subscriberName.value !== "" && subscriberEmail.value !== "") {
    subscriber.first_name = subscriberName.value;
    subscriber.email = subscriberEmail;
    error.style.display = "none";
    subscriberName.value = "";
    subscriberEmail.value = "";

    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriber),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } else {
    error.style.display = "block";
  }
});
