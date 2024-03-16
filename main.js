import "./node_modules/bootstrap/dist/js/bootstrap.bundle";

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
const subHeaderWrapper = document.querySelector(".sub-header-wrapper");
const guestsSection = document.getElementById("guests");
const searchContainer = document.querySelector(".search-icon");
const searchText = document.createElement("span");
const closeBtn = document.getElementById("closeBtn");
const guestPopupContainer = document.getElementById("popUpGuests");
searchText.textContent = "Search";

let isGuestPopopOpen = false;

if (addGuests.textContent != 1) {
  addGuests.textContent = "Add guest";
  addGuests.classList.toggle("defaultColor");
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

    addGuests.classList.add("darkText");
    addInfants.classList.add("darkText");
    addPets.classList.add("darkText");
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
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
        adultCount.textContent = adultCountNum;
        addGuests.textContent = childrenCountNum + adultCountNum;
      }

      addGuests.textContent = childrenCountNum + savedAdultCount;

      if (savedAdultCount + savedChildrenCount === 16) {
        addGuests.textContent = savedChildrenCount + savedAdultCount + "+";
        childrenCount.textContent = savedChildrenCount;
        closeBtn.classList.remove("showCloseBtn");
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

      if (childrenCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
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

      if (childrenCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
      }
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

      if (savedAdultCount < 16 && savedChildrenCount + savedAdultCount !== 16) {
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
          closeBtn.classList.add("showCloseBtn");
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
          closeBtn.classList.add("showCloseBtn");
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

      /* ------------ Close Button ---------- */
      if (adultCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
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
      const savedPetCount = JSON.parse(
        window.sessionStorage.getItem("petCount")
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
        adultCount.textContent = adultCountNum;
      } else {
        adultCountNum = savedAdultCount;
        adultCount.textContent = savedAdultCount;
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

      if (adultCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
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
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
        adultCount.textContent = adultCountNum;
        addGuests.textContent = childrenCountNum + adultCountNum + " guest";
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

      const subText = addInfants.textContent.substring(0, 5) + "...";

      if (addInfants.textContent.length > 8) {
        addInfants.textContent = subText;
      }

      if (infantCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
      }
    });

    infantMinusBtn.addEventListener("click", () => {
      const savedInfantCount = JSON.parse(
        window.sessionStorage.getItem("infantCount")
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

      const subText = addInfants.textContent.substring(0, 5);

      if (addInfants.textContent.length > 8) {
        addInfants.textContent = subText;
      }

      if (infantCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
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
        window.sessionStorage.setItem(
          "adultCount",
          JSON.stringify(adultCountNum)
        );
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

      if (petCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
      }

      const subText = addInfants.textContent.substring(0, 5) + "...";

      if (addInfants.textContent.length > 8) {
        addInfants.textContent = subText;
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
      if (petCountNum !== 0) {
        closeBtn.classList.add("showCloseBtn");
      } else {
        closeBtn.classList.remove("showCloseBtn");
      }
    });
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");

    addPets.classList.remove("hidePets");

    const savedInfantCount = JSON.parse(
      window.sessionStorage.getItem("infantCount")
    );

    if (savedInfantCount != 0) {
      addInfants.textContent = savedInfantCount + " infants";
    }
  }
});

/* ------------ Reset Selected guests on Page Load ---------- */
window.addEventListener("DOMContentLoaded", (e) => {
  window.sessionStorage.setItem("adultCount", JSON.stringify(0));
  window.sessionStorage.setItem("childrenCount", JSON.stringify(0));
  window.sessionStorage.setItem("infantCount", JSON.stringify(0));
  window.sessionStorage.setItem("petCount", JSON.stringify(0));
});


closeBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("adultCount", JSON.stringify(0));
  window.sessionStorage.setItem("childrenCount", JSON.stringify(0));
  window.sessionStorage.setItem("infantCount", JSON.stringify(0));
  window.sessionStorage.setItem("petCount", JSON.stringify(0));

  addInfants.textContent = "";
  addPets.textContent = "";
  addGuests.textContent = "Add guests";
  
  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount < 1) {
    addInfants.textContent = ""
  }

  closeBtn.classList.remove("showCloseBtn");
});



/* ------------ Close All Popups when clicked outside ------------- */
const mainElement = document.getElementById("mainElement")
const homeNav = document.getElementById("homeNav")

homeNav.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = ""
    isMenuOpen = false
  }

  if (!guestPopupContainer.contains(e.target)) {
    guestPopupContainer.innerHTML = "";
    isGuestPopopOpen = false
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");
  }

  
  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount != 0) {
    addInfants.textContent = savedInfantCount + " infants";
  }

  addPets.classList.remove("hidePets");
})

subHeaderWrapper.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = ""
    isMenuOpen = false
  }
})


mainElement.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = ""
    isMenuOpen = false
  }

  if (!guestPopupContainer.contains(e.target)) {
    guestPopupContainer.innerHTML = "";
    isGuestPopopOpen = false
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.removeChild(searchText);
    searchContainer.classList.remove("showText");
  }

  
  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount != 0) {
    addInfants.textContent = savedInfantCount + " infants";
  }

  addPets.classList.remove("hidePets");
})

