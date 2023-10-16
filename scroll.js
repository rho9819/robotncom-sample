const ZoomElement = document.querySelector(".opacity");
const SectionBackground = document.getElementById("section1");
let zoom = 1;

const yearhide = document.querySelector(".yearhide");
const years = yearhide.querySelectorAll(".year");
const introductionTextmain = document.querySelector(".introductionTextmain");
const introductionText = introductionTextmain.querySelectorAll(".introductionText");
const imageList = document.querySelector(".imageList");
const image = imageList.querySelectorAll(".image");

// let currentYearIndex = 0;
let currentIndex = 0;
const ZOOM_SPEED = 0.1;
let count = 0;
let opacitycount = 1;

document.addEventListener("DOMContentLoaded", function () {

    // Function to show the next year
    function showNextYear() {
        years[currentIndex].classList.remove("active");
        introductionText[currentIndex].classList.remove("active");
        image[currentIndex].classList.remove("active");
        
        currentIndex++;
        if (currentIndex >= years.length) {
            currentIndex = 0;
        }
        years[currentIndex].classList.add("active");
        introductionText[currentIndex].classList.add("active");
        image[currentIndex].classList.add("active");
    }

    // Show the first year
    years[currentIndex].classList.add("active");
    introductionText[currentIndex].classList.add("active");
    image[currentIndex].classList.add("active");
    // Listen for scroll events
    SectionBackground.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            // Scroll down
            showNextYear();
        }
    });
});

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0 && opacitycount > -0.2) {
        ZoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)}`;
        ZoomElement.style.transition = "all 0.5s";
        ZoomElement.style.opacity = opacitycount;
        opacitycount -= 0.2;
        count++;
    } else if (count > 0) {
        ZoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)}`;
        ZoomElement.style.opacity = opacitycount;
        opacitycount += 0.2;
        count--;
    }

    if (opacitycount < 0) {
        SectionBackground.style.transform = "translate(0px, -100%)";
        SectionBackground.style.transition = "1s";
    } else if (opacitycount > 0) {
        SectionBackground.style.transform = "translate(0px, 0%)";
        SectionBackground.style.transition = "1s";
    }
});
