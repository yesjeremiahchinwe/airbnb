import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./sass/home.scss";
import "./sass/calender.scss";
import "./sass/navbar.scss";
import "./sass/menu.scss";
import "./sass/accomodation.scss";
import "./sass/footer.scss";
import guestPop from "./utils/guestPopup";
import userDetails from "./utils/userDetials";
import { FALSE } from "sass";


/* -------- Menu Popup ---------- */
const menuBtn = document.getElementById("menuBtn");
const popUpMenu = document.querySelector(".popup");

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    isMenuOpen = true;
    popUpMenu.innerHTML = userDetails();
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
    checkInDate.classList.remove("whiteBg");
    checkOutDate.classList.remove("whiteBg");
    searchDestination.classList.remove("whiteBg");
    destinationPopup.classList.remove("showDestinationPopup");
    checkInDatePopupHalfFilter.classList.remove("whiteBg");


    isGuestPopopOpen = false;
    isCheckInDate = false;
    isCheckOutDate = false;
    isDestinationPopupOpen = false;
    ischeckInDatePopupHalfFilter = false
  } else {
    popUpMenu.innerHTML = "";
    isMenuOpen = false;
  }
});

/* ---------- Sub header ------------ */
const stays = document.getElementById("stays")
const experiences = document.getElementById("experiences")
const halfFilter = document.querySelector(".halfFilter")
const fullFilter = document.querySelector(".fullFilter")
const checkInHalfFilter = document.querySelector(".checkInHalfFilter")

stays.classList.add("bolderText")

stays.addEventListener("click", () => {
  isCheckInDate = false
  isCheckOutDate = false
  experiences.classList.remove("bolderText")
  checkInDatePopupHalfFilter.classList.remove("whiteBg");
  stays.classList.add("bolderText")

  halfFilter.classList.remove("showHalfFilter")
  fullFilter.classList.remove("hideFullFilter")
})

experiences.addEventListener("click", () => {
  ischeckInDatePopupHalfFilter = false
  checkInDatePopupHalfFilter.classList.remove("whiteBg");
  stays.classList.remove("bolderText")
  experiences.classList.add("bolderText")

  halfFilter.classList.add("showHalfFilter")
  fullFilter.classList.add("hideFullFilter")
  checkInHalfFilter.textContent = "Date"
})

const searchDestination = document.getElementById("searchDestination");
const destinationPopup = document.getElementById("destinationPopup");

export const checkInDate = document.getElementById("checkInDatePopup");
export const checkOutDate = document.getElementById("checkOutDatePopup");
export const checkInDatePopupHalfFilter = document.getElementById("checkInDatePopupHalfFilter");

const calender = document.querySelector(".date-calender");

const addGuests = document.getElementById("addGuests");
const addInfants = document.getElementById("addInfants");
const addPets = document.getElementById("addPets");
const subHeaderWrapper = document.querySelector(".sub-header-wrapper");
const guestsSection = document.getElementById("guests");
const searchContainer = document.querySelector(".search-icon");
const searchText = document.createElement("span");
const closeBtn = document.getElementById("closeBtn");
const closeCheckInBtnFullFilter = document.getElementById("closeCheckInBtnFullFilter");
const guestPopupContainer = document.getElementById("popUpGuests");
searchText.textContent = "Search";

let isDestinationPopupOpen = false;
let isGuestPopopOpen = false;
let isCheckInDate = false;
let isCheckOutDate = false;
let ischeckInDatePopupHalfFilter = false;

/* ------------------------- Search Destination ------------------- */
const searchDesValue = document.getElementById("searchDesValue");
const flexible = document.getElementById("flexible");
const europe = document.getElementById("europe");
const canada = document.getElementById("canada");
const unitedStates = document.getElementById("unitedState");
const unitedKingdom = document.getElementById("unitedKingdom");
const middleEast = document.getElementById("middleEast");
const closeDestinationBtn = document.getElementById("closeDesBtn");

closeDestinationBtn.addEventListener("click", (e) => {
  if (searchDestination.classList.contains("whiteBg")) {
    e.stopPropagation();
    searchDesValue.textContent = "Search destiniations";
    searchDesValue.classList.remove("boldText");
    closeDestinationBtn.classList.remove("showCloseCheckOutBtn");
    destinationPopup.classList.add("showDestinationPopup");
  }
});

flexible.addEventListener("click", () => {
  searchDesValue.textContent = "Search destiniations";
  searchDesValue.classList.remove("boldText");
  closeDestinationBtn.classList.remove("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

europe.addEventListener("click", () => {
  window.sessionStorage.setItem("europe", JSON.stringify(europe.textContent));
  const savedEurope = JSON.parse(window.sessionStorage.getItem("europe"));
  searchDesValue.textContent = savedEurope;
  searchDesValue.classList.add("boldText");
  closeDestinationBtn.classList.add("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

canada.addEventListener("click", () => {
  window.sessionStorage.setItem("canada", JSON.stringify(canada.textContent));
  const savedCandacanada = JSON.parse(window.sessionStorage.getItem("canada"));
  searchDesValue.textContent = savedCandacanada;
  searchDesValue.classList.add("boldText");
  closeDestinationBtn.classList.add("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

unitedStates.addEventListener("click", () => {
  window.sessionStorage.setItem(
    "unitedStates",
    JSON.stringify(unitedStates.textContent)
  );
  const savedUniteunitedStates = JSON.parse(
    window.sessionStorage.getItem("unitedStates")
  );
  searchDesValue.textContent = savedUniteunitedStates;
  searchDesValue.classList.add("boldText");
  closeDestinationBtn.classList.add("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

unitedKingdom.addEventListener("click", () => {
  window.sessionStorage.setItem(
    "unitedKingdom",
    JSON.stringify(unitedKingdom.textContent)
  );
  const savedUnitedunitedKingdom = JSON.parse(
    window.sessionStorage.getItem("unitedKingdom")
  );
  searchDesValue.textContent = savedUnitedunitedKingdom;
  searchDesValue.classList.add("boldText");
  closeDestinationBtn.classList.add("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

middleEast.addEventListener("click", () => {
  window.sessionStorage.setItem(
    "middleEast",
    JSON.stringify(middleEast.textContent)
  );
  const savedMiddleEast = JSON.parse(
    window.sessionStorage.getItem("middleEast")
  );
  searchDesValue.textContent = savedMiddleEast;
  searchDesValue.classList.add("boldText");
  closeDestinationBtn.classList.add("showCloseCheckOutBtn");

  searchDestination.classList.remove("whiteBg");
  checkInDate.classList.add("whiteBg");
  calender.classList.add("showCalender");
  destinationPopup.classList.remove("showDestinationPopup");
});

/* --------------------- Search Destinations - Popover ----------------------- */
searchDestination.addEventListener("click", () => {
  isDestinationPopupOpen = !isDestinationPopupOpen;

  if (isDestinationPopupOpen) {
    destinationPopup.classList.add("showDestinationPopup");
    searchDestination.classList.add("whiteBg");
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.add("grayBg");
    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");

    isGuestPopopOpen = false;
    isCheckInDate= false
    isCheckOutDate = false
    ischeckInDatePopupHalfFilter = false

    checkOutDate.classList.remove("whiteBg");
    checkInDate.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.remove("whiteBg");
    calender.classList.remove("showCalender");
  } else {
    destinationPopup.classList.remove("showDestinationPopup");
    searchDestination.classList.remove("whiteBg");
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    searchContainer.classList.remove("showText");
  }

  if (calender.classList.contains("showCalender")) {
    isDestinationPopupOpen = true;
    checkOutDate.classList.remove("whiteBg");
    checkInDate.classList.remove("whiteBg");
    calender.classList.remove("showCalender");
  }

  if (guestsSection.classList.contains("whiteBg")) {
    isDestinationPopupOpen = true;
    isGuestPopopOpen = true;
    guestsSection.classList.remove("whiteBg");
    guestPopupContainer.innerHTML = "";

    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
  }
});

if (addGuests.textContent != 1) {
  addGuests.textContent = "Add guest";
  addGuests.classList.toggle("defaultColor");
}

/* ----------------------- Add Guests - Popover ----------------------- */
guestsSection.addEventListener("click", () => {
  isGuestPopopOpen = !isGuestPopopOpen;

  let adultCountNum = 0;
  let childrenCountNum = 0;
  let infantCountNum = 0;
  let petCountNum = 0;

  if (calender.classList.contains("showCalender")) {
    checkOutDate.classList.remove("whiteBg");
    checkInDate.classList.remove("whiteBg");
    calender.classList.remove("showCalender");

    isGuestPopopOpen = true;
  }

  if (searchDestination.classList.contains("whiteBg")) {
    destinationPopup.classList.remove("showDestinationPopup");
    searchDestination.classList.remove("whiteBg");

    isGuestPopopOpen = true;
  }

  if (isGuestPopopOpen) {
    isDestinationPopupOpen = false;
    isCheckInDate= false
    isCheckOutDate = false
    ischeckInDatePopupHalfFilter = false
    guestPopupContainer.innerHTML = guestPop();
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.add("whiteBg");
    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");

    checkOutDate.classList.remove("whiteBg");
    checkInDate.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.remove("whiteBg");
    calender.classList.remove("showCalender");

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

      if (adultCountNum === 0) {
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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

      if (adultCountNum === 0) {
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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

      if (petCountNum < 5) {
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));
        petCountNum = savedPetCount + 1;
        window.sessionStorage.setItem("petCount", JSON.stringify(petCountNum));
      }

      petCount.textContent = petCountNum;

      if (adultCountNum === 0) {
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
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
        closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
      }
    });
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
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

/* --------------------  Calender - CheckInDate ------------------ */

checkInDate.addEventListener("click", () => {
  isCheckOutDate = false;
  isCheckInDate = !isCheckInDate;
  checkOutDate.classList.remove("whiteBg");

  if (guestsSection.classList.contains("whiteBg")) {
    isCheckInDate = true;
    guestPopupContainer.innerHTML = "";
    guestsSection.classList.remove("whiteBg");
    checkInDate.classList.add("whiteBg");
    checkOutDate.classList.remove("whiteBg");
    calender.classList.add("showCalender");

    isGuestPopopOpen = true;

    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
  }

  if (searchDestination.classList.contains("whiteBg")) {
    isCheckInDate = true;
    destinationPopup.classList.remove("showDestinationPopup");
    searchDestination.classList.remove("whiteBg");
    guestPopupContainer.innerHTML = "";

    isDestinationPopupOpen = true;
  }

  if (isCheckInDate) {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.remove("whiteBg");
    checkInDate.classList.add("whiteBg");
    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
    calender.classList.add("showCalender");

    isDestinationPopupOpen = false;
    isGuestPopopOpen= false
    isCheckOutDate = false

    checkOutDate.classList.remove("whiteBg");
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    checkInDate.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
  }
});

/* ---------------- CheckinDate for Experiences ------------------- */
checkInDatePopupHalfFilter.addEventListener("click", () => {
  ischeckInDatePopupHalfFilter = !ischeckInDatePopupHalfFilter
  checkOutDate.classList.remove("whiteBg");

  if (guestsSection.classList.contains("whiteBg")) {
    ischeckInDatePopupHalfFilter = true;
    guestPopupContainer.innerHTML = "";
    guestsSection.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.add("whiteBg");
    checkOutDate.classList.remove("whiteBg");
    calender.classList.add("showCalender");

    isGuestPopopOpen = true;

    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
  }

  if (searchDestination.classList.contains("whiteBg")) {
    ischeckInDatePopupHalfFilter = true;
    destinationPopup.classList.remove("showDestinationPopup");
    searchDestination.classList.remove("whiteBg");
    guestPopupContainer.innerHTML = "";

    isDestinationPopupOpen = true;
  }

  if (ischeckInDatePopupHalfFilter) {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.add("whiteBg");
    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
    calender.classList.add("showCalender");

    isDestinationPopupOpen = false;
    isGuestPopopOpen= false
    isCheckOutDate = false
    isCheckInDate = false

    checkOutDate.classList.remove("whiteBg");
  } else {
    guestPopupContainer.innerHTML = "";
    checkInDatePopupHalfFilter.classList.remove("whiteBg");
    subHeaderWrapper.classList.remove("grayBg");
    checkInDate.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
  }
});

closeCheckInBtnFullFilter.addEventListener("click", (e) => {
  e.stopPropagation()
})


/* ------------------- Calender - Checkout Date --------------- */
checkOutDate.addEventListener("click", () => {
  isCheckInDate = false;
  isCheckOutDate = !isCheckOutDate;
  checkInDate.classList.remove("whiteBg");

  if (guestsSection.classList.contains("whiteBg")) {
    isCheckOutDate = true;
    guestPopupContainer.innerHTML = "";
    guestsSection.classList.remove("whiteBg");
    checkOutDate.classList.add("whiteBg");
    checkInDate.classList.remove("whiteBg");
    calender.classList.add("showCalender");

    isGuestPopopOpen = true;

    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
  }

  if (searchDestination.classList.contains("whiteBg")) {
    isCheckOutDate = true;
    destinationPopup.classList.remove("showDestinationPopup");
    searchDestination.classList.remove("whiteBg");
    guestPopupContainer.innerHTML = "";

    isDestinationPopupOpen = true;
  }

  if (isCheckOutDate) {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.add("grayBg");
    guestsSection.classList.remove("whiteBg");
    checkOutDate.classList.add("whiteBg");
    if (!searchContainer.textContent.includes("Search")) {
      searchContainer.appendChild(searchText);
    }
    searchContainer.classList.add("showText");
    calender.classList.add("showCalender");

    isDestinationPopupOpen = false;
    isCheckInDate= false
    isGuestPopopOpen = false

    checkInDate.classList.remove("whiteBg");
  } else {
    guestPopupContainer.innerHTML = "";
    subHeaderWrapper.classList.remove("grayBg");
    checkOutDate.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
  }
});

/* --------------- Close and Cancel Guest filter --------------- */
closeBtn.addEventListener("click", (e) => {
  if (!isGuestPopopOpen) {
    e.stopPropagation();
  }

  window.sessionStorage.setItem("adultCount", JSON.stringify(0));
  window.sessionStorage.setItem("childrenCount", JSON.stringify(0));
  window.sessionStorage.setItem("infantCount", JSON.stringify(0));
  window.sessionStorage.setItem("petCount", JSON.stringify(0));

  addInfants.textContent = "";
  addPets.textContent = "";
  addGuests.textContent = "Add guests";

  guestPopupContainer.innerHTML = "";

  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount < 1) {
    addInfants.textContent = "";
  }

  closeBtn.classList.remove("showCloseBtn");
  closeCheckInBtnFullFilter.classList.remove("showCloseBtn");
});

/* ------------ Close All Popups when clicked outside ------------- */
const mainElement = document.getElementById("mainElement");
const homeNav = document.getElementById("homeNav");

homeNav.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = "";
    isMenuOpen = false;
  }

  if (!destinationPopup.contains(e.target)) {
    searchDestination.classList.remove("whiteBg");
    destinationPopup.classList.remove("showDestinationPopup");
    subHeaderWrapper.classList.remove("grayBg");
    searchContainer.classList.remove("showText");
    isDestinationPopupOpen = false;
  }

  if (!calender.contains(e.target)) {
    checkInDate.classList.remove("whiteBg");
    checkOutDate.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.remove("whiteBg")
    subHeaderWrapper.classList.remove("grayBg");
    checkOutDate.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
    ischeckInDatePopupHalfFilter = false
    isCheckInDate = !isCheckInDate;
    isCheckOutDate = !isCheckOutDate;
  }

  if (!guestPopupContainer.contains(e.target)) {
    guestPopupContainer.innerHTML = "";
    isGuestPopopOpen = false;
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
  }

  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount != 0) {
    addInfants.textContent = savedInfantCount + " infants";
  }

  addPets.classList.remove("hidePets");
});

subHeaderWrapper.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = "";
    isMenuOpen = false;
  }
});

mainElement.addEventListener("mousedown", (e) => {
  if (!popUpMenu.contains(e.target)) {
    popUpMenu.innerHTML = "";
    isMenuOpen = false;
  }

  if (!destinationPopup.contains(e.target)) {
    searchDestination.classList.remove("whiteBg");
    destinationPopup.classList.remove("showDestinationPopup");
    subHeaderWrapper.classList.remove("grayBg");
    searchContainer.classList.remove("showText");
    isDestinationPopupOpen = false;
  }

  if (!calender.contains(e.target)) {
    checkInDate.classList.remove("whiteBg");
    checkOutDate.classList.remove("whiteBg");
    checkInDatePopupHalfFilter.classList.remove("whiteBg")
    subHeaderWrapper.classList.remove("grayBg");
    checkOutDate.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
    calender.classList.remove("showCalender");
    ischeckInDatePopupHalfFilter = false
    isCheckInDate = !isCheckInDate;
    isCheckOutDate = !isCheckOutDate;
  }

  if (!guestPopupContainer.contains(e.target)) {
    guestPopupContainer.innerHTML = "";
    isGuestPopopOpen = false;
    subHeaderWrapper.classList.remove("grayBg");
    guestsSection.classList.remove("whiteBg");
    searchContainer.classList.remove("showText");
  }

  const savedInfantCount = JSON.parse(
    window.sessionStorage.getItem("infantCount")
  );

  if (savedInfantCount != 0) {
    addInfants.textContent = savedInfantCount + " infants";
  }

  addPets.classList.remove("hidePets");
});

/* ------------- Menu Switch ------------ */
const switchEle = document.getElementById("taxSwitch");
const checkBox = document.querySelector(".check-box");

let isTaxChecked = false;

switchEle.addEventListener("click", () => {
  isTaxChecked = !isTaxChecked;

  if (isTaxChecked) {
    checkBox.classList.add("checked");
  } else {
    checkBox.classList.remove("checked");
  }
});
