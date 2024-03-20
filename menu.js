const menuWrapper = document.querySelector(".menu_wrapper")
const menuList = document.querySelector(".menu-list")
const arrowButtons = document.querySelectorAll(".menu_wrapper i");
const leftArrow = document.querySelector(".leftArrow")
const rightArrow = document.querySelector(".rightArrow")

const firstCardWidth = menuList.querySelector(".slide").offsetWidth;
const menuListChildren = [...menuList.children];


// Get the number of cards that can fit in the carousel at once
let menuItemPreview = Math.round(menuList.offsetWidth / firstCardWidth)


// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowButtons.forEach(button => {
    button.addEventListener("click", () => {
        menuList.scrollLeft += button.id === "left" ? -(firstCardWidth * 6) : firstCardWidth * 6
    })
})


// If the carousel is at the beginning, hide left arrow
menuList.addEventListener("scroll", () => {
    if (menuList.scrollLeft === 0) {
        leftArrow.classList.remove("showLeftArrow")
    } else {
        leftArrow.classList.add("showLeftArrow")
    }

    if (Math.ceil(menuList.scrollLeft) === menuList.scrollWidth - menuList.offsetWidth) {
        rightArrow.classList.add("showRightArrow")
    } else {
        rightArrow.classList.remove("showRightArrow")
    }
})

