const hero = [{
        image: "images/desktop-image-hero-1.jpg",
        heading: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        image: "images/desktop-image-hero-2.jpg",
        heading: "We are available all across the globe",
        text: "With stores all over the world. it's easy for you to find furniture for your home or place of businnes. Locally, we're in most major cities throughout the country. Find the branch nearest you usiing our store locator. Any questions? Dont hesitate to contact us today.",

    },
    {
        image: "images/desktop-image-hero-3.jpg",
        heading: "manufactured with the best material",
        text: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. with three decades of experience in this industry, we understad what customers want for their home and office",
    },
];
const head = document.querySelector(".hero-head");
const heroText = document.querySelector(".text");
const img = document.getElementById("img");
const prev = document.getElementById("prev");
const next = document.getElementById("next")

let counter = 0;

window.addEventListener("DOMContentLoaded", function() {
    const item = hero[counter];
    head.textContent = item.heading;
    heroText.textContent = item.text;
    img.src = item.image;
});

function slide() {
    const item = hero[counter];

    head.innerText = item.heading;
    heroText.innerText = item.text;
    img.src = item.image;
};

prev.addEventListener("click", previous)

function previous() {
    counter--
    if (counter < 0) {
        counter = hero.length - 1;
    }
    slide();

};

next.addEventListener("click", nextItem);

function nextItem() {
    counter++
    if (counter == hero.length) {
        counter = 0
    }
    slide();

};

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    nav.classList.add("show")
    hamburger.style.display = "none"
    close.style.display = "block"

})
close.addEventListener("click", () => {
    hamburger.style.display = "block";
    nav.classList.remove("show")
    close.style.display = "none"
})