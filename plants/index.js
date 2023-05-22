// Burger menu

const hamBtn = document.querySelector(".bar");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (event) => {
  if (nav.classList.contains("nav-opened")) {
    nav.classList.remove("nav-opened");
    hamBtn.src = "img/burger.png";
  } else {
    nav.classList.add("nav-opened");
    hamBtn.src = "img/bx-plus.png";
  }
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("nav-opened") && !event.target.classList.contains("nav")) {
    nav.classList.remove("nav-opened");
    hamBtn.src = "img/burger.png";
  }
});

// Burger menu

//Blur effect start

const buttonServiceEls = document.querySelectorAll(".button-service");
const itemServiceEls = document.querySelectorAll(".item-service");
let btnCounter = 0;

for (const btn of buttonServiceEls) {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      addBlur(filter);
      btnCounter--;
    } else {
      btn.classList.add("active");
      removeBlur(filter, btnCounter);
      btnCounter++;
    }
    if (btnCounter === 2) {
      for (const btn of buttonServiceEls) {
        if (!btn.classList.contains("active")) {
          btn.classList.add("disabled");
        }
      }
    } else {
      for (const btn of buttonServiceEls) {
        if (!btn.classList.contains("active")) {
          btn.classList.remove("disabled");
        }
      }
    }

    if (btnCounter === 0) {
      for (const item of itemServiceEls) {
        item.classList.remove("disabled");
      }
    }
  });
}

function removeBlur(filter, counter) {
  if (counter === 0) {
    for (const item of itemServiceEls) {
      item.classList.add("disabled");
    }
  }
  for (const item of itemServiceEls) {
    if (item.dataset.filter === filter) {
      item.classList.remove("disabled");
    }
  }
}

function addBlur(filter) {
  for (const item of itemServiceEls) {
    if (item.dataset.filter === filter) {
      item.classList.add("disabled");
    }
  }
}

//Blur effect end

let acc = document.getElementsByClassName("basics");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (card of acc) {
      let accordionSection = card.nextElementSibling;
      if (card == this) {
        this.classList.toggle("active");
        if (accordionSection.style.maxHeight) {
          accordionSection.style.maxHeight = null;
        } else {
          accordionSection.style.maxHeight = accordionSection.scrollHeight + "px";
        }
      } else {
        card.classList.remove("active");
        accordionSection.style.maxHeight = null;
      }
    }
  });
}

// let a = document.getElementsByClassName("accordionBtn");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     for (card of acc) {
//       let contentSelector = card.nextElementSibling;
//       if (card == this) {
//         this.classList.toggle("active");
//         if (contentSelector.style.maxHeight) {
//           contentSelector.style.maxHeight = null;
//         } else {
//           contentSelector.style.maxHeight = contentSelector.scrollHeight + "px";
//         }
//       } else {
//         card.classList.remove("active");
//         contentSelector.style.maxHeight = null;
//       }
//     }
//   });
// }

const contentSelectors = document.querySelector(".content-selectors");
const accordionBtn = document.querySelector(".content-selectors .accordion-btn");
const photoCard = document.querySelector(".photo-card");
const listCards = photoCard.querySelectorAll(".list-card2 .info-card");

accordionBtn.addEventListener("click", () => {
  contentSelectors.classList.toggle("opened-selector");
  if (!contentSelectors.classList.contains("opened-selector")) {
    // photoCard.classList.remove("active");
    accordionBtn.querySelector("p").innerText = "City";
  }
});

const cards = [
  { city: "Canandaigua, NY", phone: "+1 585 393 0001", office: "151 Charlotte Street" },
  { city: "New York City", phone: "+1 212 456 0002", office: "9 East 91st Street" },
  { city: "Yonkers, NY", phone: "+1 914 678 0003", office: "511 Warburton Ave" },
  { city: "Sherrill, NY", phone: "+1 315 908 0004", office: "14 WEST Noyes DLVD" },
];
contentSelectors.addEventListener("click", (event) => {
  const el = event.target;
  if (el.classList.contains("button-select")) {
    accordionBtn.querySelector("p").innerText = el.innerText;
    contentSelectors.classList.remove("opened-selector")
    photoCard.classList.add("active");
    const contact = +el.dataset.contact;
    listCards[0].innerText = cards[contact].city;
    listCards[1].innerText = cards[contact].phone;
    listCards[2].innerText = cards[contact].office;
  }
});
