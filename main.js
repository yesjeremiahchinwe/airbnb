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
const addInfants = document.getElementById("addInfants");
const addPets = document.getElementById("addPets");
const dottedLines = document.getElementById("dottedLines");
const subHeaderWrapper = document.querySelector(".sub-header-wrapper");
const guestsSection = document.getElementById("guests");
const searchContainer = document.querySelector(".search-icon");
const searchText = document.createElement("span");
const guestPopupContainer = document.getElementById("popUpGuests");
searchText.textContent = "Search";

let isGuestPopopOpen = false;

if (addGuests.textContent != 1) {
  addGuests.textContent = "Add guest";
}

guestsSection.addEventListener("click", () => {
  isGuestPopopOpen = !isGuestPopopOpen;

  let adultCountNum = 0;
  let childrenCountNum = 0;
  let infantCountNum = 0;
  let petCountNum = 0;

  if (isGuestPopopOpen) {
    guestPopupContainer.innerHTML = guestPop();
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.add("whiteBg");
    searchContainer.appendChild(searchText);
    searchContainer.classList.add("showText");

    /* -------- Guest Popup ----------- */
    /* ------------ Children Count ----------- */

    const childrenCount = document.getElementById("childrenCount");
    const childrenPlusBtn = document.getElementById("childrenPlusBtn");
    const childrenMinusBtn = document.getElementById("childrenMinusBtn");

    childrenCount.textContent = JSON.parse(
      window.sessionStorage.getItem("childrenCount")
    );

    childrenPlusBtn.addEventListener("click", () => {
      const savedChildrenCount = JSON.parse(
        window.sessionStorage.getItem("childrenCount")
      );
      const savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );

      if (savedAdultCount < 15 && savedChildrenCount + savedAdultCount !== 16) {
        window.sessionStorage.setItem(
          "childrenCount",
          JSON.stringify(childrenCountNum)
        );
        childrenCountNum = savedChildrenCount + 1;
        window.sessionStorage.setItem(
          "childrenCount",
          JSON.stringify(childrenCountNum)
        );
      }

      childrenCount.textContent = childrenCountNum;

      if (savedAdultCount === 0) {
        adultCountNum = 1;
        window.sessionStorage.setItem("adultCount", JSON.stringify(adultCountNum));
        adultCount.textContent = adultCountNum;
        addGuests.textContent = childrenCountNum + adultCountNum;
      }

      addGuests.textContent = childrenCountNum + savedAdultCount;

      if (savedAdultCount + savedChildrenCount === 16) {
        addGuests.textContent = savedChildrenCount + savedAdultCount + "+";
        childrenCount.textContent = savedChildrenCount;
      }

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
      const savedChildrenCount = JSON.parse(
        window.sessionStorage.getItem("childrenCount")
      );
      const savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );

      if (savedChildrenCount > 0) {
        window.sessionStorage.setItem(
          "childrenCount",
          JSON.stringify(childrenCountNum)
        );
        childrenCountNum = savedChildrenCount - 1;
        window.sessionStorage.setItem(
          "childrenCount",
          JSON.stringify(childrenCountNum)
        );

        addGuests.textContent = childrenCountNum + savedAdultCount;
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

    adultCount.textContent = JSON.parse(
      window.sessionStorage.getItem("adultCount")
    );

    adultPlusBtn.addEventListener("click", () => {
      const savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );
      const savedChildrenCount = JSON.parse(
        window.sessionStorage.getItem("childrenCount")
      );

      if (adultCountNum < 16 && savedChildrenCount + adultCountNum !== 16) {
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
        adultCountNum = savedAdultCount + 1;
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
      }

      adultCount.textContent = adultCountNum;

      if (savedChildrenCount === 0) {
        addGuests.textContent = adultCountNum;

        if (savedAdultCount === 16) {
          adultCount.textContent = adultCountNum + "+";
          addGuests.textContent = adultCountNum + "+";
        }

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
        addGuests.textContent = adultCountNum + savedChildrenCount;

        if (savedAdultCount + savedChildrenCount === 16) {
          addGuests.textContent = savedChildrenCount + savedAdultCount + "+";
          adultCount.textContent = savedAdultCount;
        }

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
      const savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );
      const savedChildrenCount = JSON.parse(
        window.sessionStorage.getItem("childrenCount")
      );
      const savedInfantCount = JSON.parse(
        window.sessionStorage.getItem("infantCount")
      );

      if (savedAdultCount > 0) {
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
        adultCountNum = savedAdultCount - 1;
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
      }

      adultCount.textContent = adultCountNum;

      if (
        (savedChildrenCount != 0 && savedAdultCount < 2) ||
        (savedInfantCount != 0 && savedAdultCount < 2) ||
        (savedPetCount != 0 && savedAdultCount < 2)
      ) {
        adultCountNum = 1;
        adultCount.textContent = 1;
      }

      if (savedChildrenCount !== 0) {
        addGuests.textContent = adultCountNum + savedChildrenCount;
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
    });

    /* ------------ Infants Count ----------- */
    const infantCount = document.getElementById("infantCount");
    const infantPlusBtn = document.getElementById("infantsPlusBtn");
    const infantMinusBtn = document.getElementById("infantsMinusBtn");

    infantCount.textContent = JSON.parse(
      window.sessionStorage.getItem("infantCount")
    );

    infantPlusBtn.addEventListener("click", () => {
      const savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );
      const savedInfantCount = JSON.parse(
        window.sessionStorage.getItem("infantCount")
      );
      const savedPetCount = JSON.parse(
        window.sessionStorage.getItem("petCount")
      );

      if (infantCountNum < 5) {
        window.sessionStorage.setItem(
          "infantCount",
          JSON.stringify(infantCountNum)
        );
        infantCountNum = savedInfantCount + 1;
        window.sessionStorage.setItem(
          "infantCount",
          JSON.stringify(infantCountNum)
        );
      }

      infantCount.textContent = infantCountNum;

      if (savedAdultCount === 0) {
        adultCountNum = 1;
        window.sessionStorage.setItem("adultCount", JSON.stringify(adultCountNum));
        adultCount.textContent = adultCountNum;
        addGuests.textContent = childrenCountNum + adultCountNum;
      }

      const originText = addGuests.textContent;
      const spanEl = document.createElement("span");
      if (originText == 1) {
        spanEl.textContent = " guest";
        addGuests.appendChild(spanEl);
      }

      if (infantCountNum !== 0) {
        addInfants.textContent = infantCountNum;
        const originInfantText = addInfants.textContent;
        const infantSpanEl = document.createElement("span");

        if (originInfantText == 1) {
          infantSpanEl.textContent = " infant";
          addInfants.appendChild(infantSpanEl);
        } else {
          infantSpanEl.textContent = " infants";
          addInfants.appendChild(infantSpanEl);
        }
      }

      
      if (savedPetCount >= 1 && infantCountNum >= 1) {
        dottedLines.classList.add("showDottedLines");
        addPets.classList.add("hidePets");
      } else if (savedPetCount >= 1) {
        addPets.classList.remove("hidePets");
      } else {
        dottedLines.classList.remove("showDottedLines");
        addPets.classList.add("hidePets");
      }
    });

    infantMinusBtn.addEventListener("click", () => {
      const savedInfantCount = JSON.parse(
        window.sessionStorage.getItem("infantCount")
      );
      const savedPetCount = JSON.parse(
        window.sessionStorage.getItem("petCount")
      );

      if (savedInfantCount > 0) {
        window.sessionStorage.setItem(
          "infantCount",
          JSON.stringify(infantCountNum)
        );
        infantCountNum = savedInfantCount - 1;
        window.sessionStorage.setItem(
          "infantCount",
          JSON.stringify(infantCountNum)
        );
      }

      infantCount.textContent = infantCountNum;

      if (infantCountNum < 1) {
        addInfants.textContent = "";
        infantCount.textContent = infantCountNum;
      } else {
        infantCount.textContent = infantCountNum;
        addInfants.textContent = infantCountNum;
        const originInfantText = addInfants.textContent;
        const infantSpanEl = document.createElement("span");

        if (originInfantText == 1) {
          infantSpanEl.textContent = " infant";
          addInfants.appendChild(infantSpanEl);
        } else {
          infantSpanEl.textContent = " infants";
          addInfants.appendChild(infantSpanEl);
        }
      }

      if (savedPetCount >= 1 && infantCountNum >= 1) {
        dottedLines.classList.add("showDottedLines");
        addPets.classList.add("hidePets");
      } else if (savedPetCount >= 1 || infantCountNum === 0) {
        addPets.classList.remove("hidePets");
        dottedLines.classList.remove("showDottedLines");
      } else {
        dottedLines.classList.remove("showDottedLines");
        addPets.classList.add("hidePets");
      }
    });

    /* ------------ Pets Count ---------- */
    const petCount = document.getElementById("petCount");
    const petPlusBtn = document.getElementById("petsPlusBtn");
    const petMinusBtn = document.getElementById("petsMinusBtn");
    petCount.textContent = JSON.parse(
      window.sessionStorage.getItem("petCount")
    );

    addPets.classList.add("hidePets");

    petPlusBtn.addEventListener("click", () => {
      const savedPetCount = JSON.parse(
        window.sessionStorage.getItem("petCount")
      );
      let savedAdultCount = JSON.parse(
        window.sessionStorage.getItem("adultCount")
      );
      const savedInfantCount = JSON.parse(
        window.sessionStorage.getItem("infantCount")
      );

      if (petCountNum < 5) {
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));
        petCountNum = savedPetCount + 1;
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));
      }

      petCount.textContent = petCountNum;

      if (savedAdultCount === 0) {
        adultCountNum = 1;
        window.sessionStorage.setItem("adultCount", JSON.stringify(adultCountNum));
        adultCount.textContent = adultCountNum;
        addGuests.textContent = childrenCountNum + adultCountNum;
      }

      const originText = addGuests.textContent;
      const spanEl = document.createElement("span");
      if (originText == 1) {
        spanEl.textContent = " guest";
        addGuests.appendChild(spanEl);
      }

      if (petCountNum !== 0) {
        addPets.textContent = petCountNum;
        const originText = addPets.textContent;
        const infantSpanEl = document.createElement("span");

        if (originText == 1) {
          infantSpanEl.textContent = " pet";
          addPets.appendChild(infantSpanEl);
        } else {
          infantSpanEl.textContent = " pets";
          addPets.appendChild(infantSpanEl);
        }
      }

      if (petCountNum >= 1 && savedInfantCount >= 1) {
        dottedLines.classList.add("showDottedLines");
        addPets.classList.add("hidePets");
      } else if (petCountNum >= 1) {
        addPets.classList.remove("hidePets");
      } else {
        dottedLines.classList.remove("showDottedLines");
        addPets.classList.add("hidePets");
      }
    });

    petMinusBtn.addEventListener("click", () => {
      const savedPetCount = JSON.parse(
        window.sessionStorage.getItem("petCount")
      );

      if (petCountNum > 0) {
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));
        petCountNum = savedPetCount - 1;
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));

        if (petCountNum < 1) {
          addPets.textContent = "";
          petCount.textContent = petCountNum;
        } else {
          petCount.textContent = petCountNum;
          addPets.textContent = petCountNum;
          const originInfantText = addPets.textContent;
          const infantSpanEl = document.createElement("span");

          if (originInfantText == 1) {
            infantSpanEl.textContent = " pet";
            addPets.appendChild(infantSpanEl);
          } else {
            infantSpanEl.textContent = " pets";
            addPets.appendChild(infantSpanEl);
          }
        }
      }

      petCount.textContent = petCountNum;
    });
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");

    dottedLines.classList.remove("showDottedLines");
    addPets.classList.remove("hidePets");
  }
});

/* ------------ Reset Selected guests on Page Load ---------- */
window.addEventListener("DOMContentLoaded", (e) => {
  window.sessionStorage.setItem("adultCount", JSON.stringify(0));
  window.sessionStorage.setItem("childrenCount", JSON.stringify(0));
  window.sessionStorage.setItem("infantCount", JSON.stringify(0));
  window.sessionStorage.setItem("petCount", JSON.stringify(0));
});
