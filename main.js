import "./node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css"

import "./sass/home.scss";
import guestPop from "./utils/guestPopup";
import userDetails from "./utils/userDetials";

/* -------- Menu Popup ---------- */
const menuBtn = document.getElementById("menuBtn");
const popUpMenu = document.querySelector(".popup");

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    popUpMenu.innerHTML = userDetails();
  } else {
    popUpMenu.innerHTML = "";
  }
});


/* ---------- Sub header ------------ */
const subHeaderWrapper = document.querySelector(".sub-header-wrapper");
const guestsSection = document.getElementById("guests");
const searchContainer = document.querySelector(".search-icon");
const searchText = document.createElement("span");
const guestPopupContainer = document.getElementById("popUpGuests")
searchText.textContent = "Search";

let isGuestPopopOpen = false;

guestsSection.addEventListener("click", () => {
  isGuestPopopOpen = !isGuestPopopOpen;

  if (isGuestPopopOpen) {
    guestPopupContainer.innerHTML = guestPop()
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.add("whiteBg");
    searchContainer.appendChild(searchText);
    searchContainer.classList.add("showText");
  } else {
    guestPopupContainer.innerHTML = ""
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");
  }
});

/* -------- Guest Popop ---------- */
const addGuests = document.getElementById("addGuests");
const childrenCount = document.getElementById("childrenCount");
const childrenPlusBtn = document.getElementById("childrenPlusBtn");
const childrenMinusBtn = document.getElementById("childrenMinusBtn");

let childrenCountNum = 0;
let allSelectedGuest = [];
if (!allSelectedGuest.length) {
  addGuests.textContent = "Add guest";
}

const numChildren = allSelectedGuest.filter((val) => val === "children");
const numAdult = allSelectedGuest.filter((val) => val === "adult");

childrenCount.textContent = childrenCountNum;

childrenPlusBtn.addEventListener("click", () => {
  childrenCountNum++;
  childrenCount.textContent = childrenCountNum;

  addGuests.textContent = numAdult.length + numChildren.length;
});

childrenMinusBtn.addEventListener("click", () => {
  if (childrenCountNum > 0) {
    childrenCountNum--;
  }

  childrenCount.textContent = childrenCountNum;
});
