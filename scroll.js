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

    // 디바운스를 위한 변수 설정
    let isScrolling = false;
    const debounceTimeout = 1000; // 1초

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

    // 초기에 2018년을 보이도록 설정
    years[currentIndex].classList.add("active");
    introductionText[currentIndex].classList.add("active");
    image[currentIndex].classList.add("active");

    // 스크롤 이벤트 리스너
    SectionBackground.addEventListener("wheel", (event) => {
        if (event.deltaY > 0 && !isScrolling) {
            isScrolling = true;

            // 1초 후에 다시 스크롤 가능하도록 설정
            setTimeout(() => {
                isScrolling = false;
            }, debounceTimeout);

            // 연도 변경 함수 호출
            showNextYear();
        }

        if (event.deltaY < 0) {

            years[currentIndex].classList.remove("active");
            introductionText[currentIndex].classList.remove("active");
            image[currentIndex].classList.remove("active");
            
            currentIndex = 0;
            
            years[currentIndex].classList.add("active");
            introductionText[currentIndex].classList.add("active");
            image[currentIndex].classList.add("active");
            
        }
    });
});

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0 && opacitycount > -0.2) {
        // ZoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)}`;
        // ZoomElement.style.transition = "all 0.5s";
        // ZoomElement.style.opacity = opacitycount;
        opacitycount -= 0.2;
        count++;
    } else if (count > 0) {
        // ZoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)}`;
        // ZoomElement.style.opacity = opacitycount;
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


const map = document.getElementsByClassName("_zoomable_2689g_163")[0]
const korean = document.getElementsByClassName("_move_2689g_170")[0]
const M = document.getElementsByClassName("_viewport_2689g_156")[0]
window.addEventListener("resize", () => {
    x = window.innerWidth / 2 / 12 - (1636 / 12) * 12 + 0 / 12;
    y = window.offsetHeight / 2 / 12 - (402 / 12) * 12 + -12.75 / 12;
    // a = window.innerWidth / 2 / 12 - (1636 / 12) * 12 + 0 / 12;
    a = M == null ? void 0 : window.offsetHeight || window.outerHeight,
    z = window.innerHeight / 2 / 12 - (a + 0 / 12) * 12 + -12.75 / 12;
    map.style.transform = `translate(${x}px, ${y}px)`;
    korean.style.transform = `scale(${12}) translate(${x}px, ${y}px)`;
    korean.style.width = `calc(${12 * 100}%)`;
    korean.style.height = `calc(${12 * 100}%)`;
})