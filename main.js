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
const addGuests = document.getElementById("addGuests");
const subHeaderWrapper = document.querySelector(".sub-header-wrapper");
const guestsSection = document.getElementById("guests");
const searchContainer = document.querySelector(".search-icon");
const searchText = document.createElement("span");
const guestPopupContainer = document.getElementById("popUpGuests");
searchText.textContent = "Search";

let isGuestPopopOpen = false;

let allSelectedGuest = [];
if (!allSelectedGuest.length) {
  addGuests.textContent = "Add guest";
}

guestsSection.addEventListener("click", () => {
  isGuestPopopOpen = !isGuestPopopOpen;

  if (isGuestPopopOpen) {
    guestPopupContainer.innerHTML = guestPop();
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.add("whiteBg");
    searchContainer.appendChild(searchText);
    searchContainer.classList.add("showText");

    /* -------- Guest Popup ----------- */
    /* ------------ Children Count ----------- */
    let adultCountNum = 0;
    const childrenCount = document.getElementById("childrenCount");
    const childrenPlusBtn = document.getElementById("childrenPlusBtn");
    const childrenMinusBtn = document.getElementById("childrenMinusBtn");
    let childrenCountNum = 0;
    childrenCount.textContent = childrenCountNum;

    childrenPlusBtn.addEventListener("click", () => {
      childrenCountNum++;
      childrenCount.textContent = childrenCountNum;

      if (adultCountNum === 0) {
        adultCountNum = 1
        adultCount.textContent = adultCountNum
        addGuests.textContent = childrenCountNum + adultCountNum;
      }

      addGuests.textContent = childrenCountNum + adultCountNum;

      const originText = addGuests.textContent;
      const spanEl = document.createElement("span");
      if (originText == 1) {
        spanEl.textContent = " guest";
        addGuests.appendChild(spanEl);
      } else {
        spanEl.textContent = " guests";
        addGuests.appendChild(spanEl);
      }
    });


    childrenMinusBtn.addEventListener("click", () => {
      if (childrenCountNum > 0) {
        childrenCountNum--;

        addGuests.textContent = childrenCountNum + adultCountNum;
        const originText = addGuests.textContent;
        const spanEl = document.createElement("span");

        if (originText == 1) {
          spanEl.textContent = " guest";
          addGuests.appendChild(spanEl);
        } else if (originText == 0) {
          addGuests.textContent = "Add guest";
        } else {
          spanEl.textContent = " guests";
          addGuests.appendChild(spanEl);
        }
      }

      childrenCount.textContent = childrenCountNum;
    });



    /* -------- Adults Count --------- */
    const adultCount = document.getElementById("adultCount");
    const adultPlusBtn = document.getElementById("adultsPlusBtn");
    const adultMinusBtn = document.getElementById("adultsMinusBtn");
    adultCount.textContent = adultCountNum;

    adultPlusBtn.addEventListener("click", () => {
      adultCountNum++;
      adultCount.textContent = adultCountNum;

      if (childrenCountNum === 0) {
        addGuests.textContent = adultCountNum;
        const originText = addGuests.textContent;
        const spanEl = document.createElement("span");

        if (originText == 1) {
          spanEl.textContent = " guest";
          addGuests.appendChild(spanEl);
        } else {
          spanEl.textContent = " guests";
          addGuests.appendChild(spanEl);
        }
      } else {
        addGuests.textContent = childrenCountNum + adultCountNum;
        const originText = addGuests.textContent;
        const spanEl = document.createElement("span");

        if (originText == 1) {
          spanEl.textContent = " guest";
          addGuests.appendChild(spanEl);
        } else {
          spanEl.textContent = " guests";
          addGuests.appendChild(spanEl);
        }
      }
    });


    adultMinusBtn.addEventListener("click", () => {
      if (adultCountNum > 0) {
        adultCountNum--;
        adultCount.textContent = adultCountNum;

        if (childrenCountNum != 0 && adultCountNum < 2) {
            adultCountNum = 1
            adultCount.textContent = 1
        }

        if (childrenCountNum !== 0) {
          addGuests.textContent = adultCountNum + childrenCountNum;
          const originText = addGuests.textContent;
          const spanEl = document.createElement("span");

          if (originText == 1) {
            spanEl.textContent = " guest";
            addGuests.appendChild(spanEl);
          } else if (originText == 0) {
            addGuests.textContent = "Add guest";
          } else {
            spanEl.textContent = " guests";
            addGuests.appendChild(spanEl);
          }
        } else {
          addGuests.textContent = adultCountNum;
          const originText = addGuests.textContent;
          const spanEl = document.createElement("span");

          if (originText == 1) {
            spanEl.textContent = " guest";
            addGuests.appendChild(spanEl);
          } else if (originText == 0) {
            addGuests.textContent = "Add guest";
          } else {
            spanEl.textContent = " guests";
            addGuests.appendChild(spanEl);
          }
        }
      }
    });



    /* ------------ Infants Count ----------- */
    const infantCount = document.getElementById("infantCount");
    const infantPlusBtn = document.getElementById("infantsPlusBtn");
    const infantMinusBtn = document.getElementById("infantsMinusBtn");

    let infantCountNum = 0;

    infantCount.textContent = infantCountNum;

    infantPlusBtn.addEventListener("click", () => {
      infantCountNum++;
      infantCount.textContent = infantCountNum;

      //   addGuests.textContent = numAdult.length + numInfant.length;
    });

    infantMinusBtn.addEventListener("click", () => {
      if (infantCountNum > 0) {
        infantCountNum--;
      }

      infantCount.textContent = infantCountNum;
    });

    /* ------------ Pets Count ---------- */
    const petCount = document.getElementById("petCount");
    const petPlusBtn = document.getElementById("petsPlusBtn");
    const petMinusBtn = document.getElementById("petsMinusBtn");

    let petCountNum = 0;

    petCount.textContent = petCountNum;

    petPlusBtn.addEventListener("click", () => {
      petCountNum++;
      petCount.textContent = petCountNum;

      //   addGuests.textContent = numAdult.length + numPet.length;
    });

    petMinusBtn.addEventListener("click", () => {
      if (petCountNum > 0) {
        petCountNum--;
      }

      petCount.textContent = petCountNum;
    });
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");
  }
});

/* -------- Guest Popop ---------- */

const numChildren = allSelectedGuest.filter((val) => val === "children");
const numAdult = allSelectedGuest.filter((val) => val === "adult");
