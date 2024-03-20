import VanillaCalendar from "vanilla-calendar-pro";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import "vanilla-calendar-pro/build/vanilla-calendar.layout.min.css";
import "vanilla-calendar-pro/build/themes/light.min.css";
import { checkInDate, checkOutDate } from "./main";

const options = {
  type: "multiple",
  months: 2,
  jumpMonths: 1,
  settings: {
    range: {
      disablePast: true,
    },
    visibility: {
      daysOutside: false,
      theme: "light",
    },
  },
  actions: {
    clickDay(event, self) {
      window.sessionStorage.setItem(
        "selectedDate",
        JSON.stringify(self.selectedDates)
      );

      const selectedDate =
        JSON.parse(window.sessionStorage.getItem("selectedDate")) || [];

      const selectCheckInDate = selectedDate?.shift();

      const getCheckInMonth = selectCheckInDate?.slice(5, 7);
      const getCheckInDay = selectCheckInDate?.slice(8) || "";
      const checkInMonth =
        getCheckInMonth == "03"
          ? "Mar"
          : getCheckInMonth == "04"
          ? "Apr"
          : getCheckInMonth == "05"
          ? "May"
          : getCheckInMonth == "06"
          ? "Jun"
          : getCheckInMonth == "07"
          ? "Jul"
          : getCheckInMonth == "08"
          ? "Aug"
          : getCheckInMonth == "09"
          ? "Sep"
          : getCheckInMonth == "10"
          ? "Oct"
          : getCheckInMonth == "11"
          ? "Nov"
          : getCheckInMonth == "12"
          ? "Dec"
          : "Add dates";

      const displayCheckInDate = document.getElementById("displayCheckInDate");
      const displayCheckOutDate = document.getElementById(
        "displayCheckOutDate"
      );
      const closeCheckOutBtn = document.getElementById("closeCheckOutBtn")
      const closeCheckInBtn = document.getElementById("closeCheckInBtn")

      const checkInText = displayCheckInDate.textContent;

      const checkOutText = displayCheckOutDate.textContent;

      if (checkInText && checkInDate.classList.contains("whiteBg")) {
        displayCheckInDate.textContent = checkInMonth + " " + getCheckInDay;
        displayCheckInDate.classList.add("boldText");
        closeCheckInBtn.classList.add("showCloseCheckOutBtn")
        closeCheckOutBtn.classList.remove("showCloseCheckOutBtn")
      } 

      if (checkOutText === "Add dates" && checkInText && checkInDate.classList.contains("whiteBg")) {
        checkInDate.classList.remove("whiteBg");
        checkOutDate.classList.add("whiteBg");
        closeCheckInBtn.classList.remove("showCloseCheckOutBtn")
        return
      }
      
      if (checkOutText && checkOutDate.classList.contains("whiteBg")) {
        displayCheckOutDate.textContent = checkInMonth + " " + getCheckInDay;
        displayCheckOutDate.classList.add("boldText");
        closeCheckOutBtn.classList.add("showCloseCheckOutBtn")
        closeCheckInBtn.classList.remove("showCloseCheckOutBtn")
      }

      if (checkInText == "Add dates" && checkOutDate && checkOutDate.classList.contains("whiteBg")) {
        checkOutDate.classList.remove("whiteBg");
        checkInDate.classList.add("whiteBg");
        closeCheckOutBtn.classList.remove("showCloseCheckOutBtn")
        return
      }

      closeCheckOutBtn.addEventListener("click", () => {
        window.sessionStorage.setItem("selectedDate", JSON.stringify(""));
        displayCheckOutDate.textContent = "Add dates"
        displayCheckInDate.textContent = "Add dates"
        closeCheckOutBtn.classList.remove("showCloseCheckOutBtn")
        closeCheckInBtn.classList.remove("showCloseCheckOutBtn")
        displayCheckOutDate.classList.remove("boldText");
        displayCheckInDate.classList.remove("boldText");
      })

      closeCheckInBtn.addEventListener("click", () => {
        window.sessionStorage.setItem("selectedDate", JSON.stringify(""));
        displayCheckInDate.textContent = "Add dates"
        displayCheckOutDate.textContent = "Add dates"
        closeCheckOutBtn.classList.remove("showCloseCheckOutBtn")
        closeCheckInBtn.classList.remove("showCloseCheckOutBtn")
        displayCheckInDate.classList.remove("boldText");
        displayCheckOutDate.classList.remove("boldText");
      })
    },
  },
};

const calendar = new VanillaCalendar("#calendar", options);
calendar.init();

window.addEventListener("DOMContentLoaded", (e) => {
  window.sessionStorage.setItem("selectedDate", JSON.stringify([]));
});
