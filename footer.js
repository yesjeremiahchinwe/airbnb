const footerContainer = document.getElementById("fixedCon");

let isStarted = false;
let currentHeight = 0;

document.addEventListener("scroll", () => {
  const scrollY = document.documentElement.scrollTop;
  currentHeight = scrollY;

  if (scrollY > 80) {
    footerContainer.classList.add("hide");
    footerContainer.classList.remove("fixed");

  } else {
    footerContainer.classList.add("fixed");
    footerContainer.classList.remove("hide");
  }
});
