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
      console.log(selectedDate);

      const selectCheckInDate = selectedDate?.shift();

      const getCheckInMonth = selectCheckInDate?.slice(5, 7);
      const getCheckInDay = selectCheckInDate?.slice(8);
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
          : "No";

      const displayCheckInDate = document.getElementById("displayCheckInDate");
      const displayCheckOutDate = document.getElementById(
        "displayCheckOutDate"
      );

      const checkInText = displayCheckInDate.textContent;

      const checkOutText = displayCheckOutDate.textContent;

      if (checkInText && checkInDate.classList.contains("whiteBg")) {
        displayCheckInDate.textContent = checkInMonth + " " + getCheckInDay;
        displayCheckInDate.classList.add("boldText");
      } 

      if (checkOutText === "Add dates" && checkInText && checkInDate.classList.contains("whiteBg")) {
        checkInDate.classList.remove("whiteBg");
        checkOutDate.classList.add("whiteBg");
        return
      }
      
      if (checkOutText && checkOutDate.classList.contains("whiteBg")) {
        displayCheckOutDate.textContent = checkInMonth + " " + getCheckInDay;
        displayCheckOutDate.classList.add("boldText");
      }

      if (checkInText == "Add dates" && checkOutText && checkOutDate.classList.contains("whiteBg")) {
        checkOutDate.classList.remove("whiteBg");
        checkInDate.classList.add("whiteBg");
        return
      }
    },
  },
};

const calendar = new VanillaCalendar("#calendar", options);
calendar.init();

window.addEventListener("DOMContentLoaded", (e) => {
  window.sessionStorage.setItem("selectedDate", JSON.stringify([]));
});
