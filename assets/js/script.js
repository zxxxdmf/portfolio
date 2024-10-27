"use strict";

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Show/Hide contacts functionality
const sidebarInfoMore = document.querySelector(".sidebar-info_more");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebarInfoMore);
  const buttonText = sidebarInfoMore.classList.contains("active")
    ? "Hide Contacts"
    : "Show Contacts";
  sidebarBtn.querySelector("span").textContent = buttonText;
});

// Modal toggle function (adjusted in case testimonials are not present in HTML)
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");

const toggleModal = function () {
  if (modalContainer) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", toggleModal);
  overlay.addEventListener("click", toggleModal);
}

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Add event to all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Add event to filter buttons
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Page navigation functionality
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Additional features: Star effect customization
const stars = document.getElementById("stars");
const stars2 = document.getElementById("stars2");
const stars3 = document.getElementById("stars3");

// Generate random positions for stars
function randomizeStarPositions() {
  const numStars = 700; // Number of stars for the small ones
  const numStars2 = 200; // Number of stars for the medium ones
  const numStars3 = 100; // Number of stars for the large ones

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "1px";
    star.style.height = "1px";
    star.style.background = "transparent";
    star.style.boxShadow = "0px 0px #FFF"; // You can customize this

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    stars.appendChild(star);
  }

  for (let i = 0; i < numStars2; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "transparent";
    star.style.boxShadow = "0px 0px #FFF"; // You can customize this

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    stars2.appendChild(star);
  }

  for (let i = 0; i < numStars3; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "transparent";
    star.style.boxShadow = "0px 0px #FFF"; // You can customize this

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    stars3.appendChild(star);
  }
}

// Call the function to randomize star positions on load
window.onload = randomizeStarPositions;
