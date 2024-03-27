import "../sass/collections.scss";
import "../sass/online-plans.scss";
import "../sass/online-experience.scss";
import { collections } from "../lib/collections";
import { filterCollections } from "../lib/navigate-experiences";


/* --------------- Navbar Menu ------------------ */
const menuBtnOnlineExperience = document.getElementById(
  "menuBtnOnlineExperience"
);
const popupOnlineExperience = document.querySelector(".popupOnlineExperience");

let isMenuBtnOnlineExperience = false;

menuBtnOnlineExperience.addEventListener("click", () => {
  isMenuBtnOnlineExperience = !isMenuBtnOnlineExperience;

  if (isMenuBtnOnlineExperience) {
    isMenuBtnOnlineExperience = true;
    popupOnlineExperience.classList.add("show");
  } else {
    popupOnlineExperience.classList.remove("show");
    isMenuBtnOnlineExperience = false;
  }
});

/* -------------- Collections ------------- */
const parentCollections = document.getElementById("allCollections");

collections.forEach((collection) => {
  const renderCollection = document.createElement("div");
  renderCollection.classList.add("collection");
  renderCollection.innerHTML = ` 
    <img src=${collection.image} alt=${collection.title} />
    <div class="content">
      <div>
        <small>Collection</small>
        <h5>${collection.title}</h5>
      </div>
      <button class="btn">Show all</button>
    </div>`;

  parentCollections.appendChild(renderCollection);
});

/* ----------------- Filters -------------------- */
const navigateExpereinces = document.getElementById("navigateExpereinces");

filterCollections.forEach((filter) => {
  const renderFilter = document.createElement("section");
  navigateExpereinces.classList.add("navigate_expereinces");
  renderFilter.innerHTML = `<div><p>${filter.content}</p></div>`;

  navigateExpereinces.appendChild(renderFilter);
});
