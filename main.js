let menu = document.querySelector(".ri-menu-line");
let nav = document.querySelector(".nav");
let box = document.querySelector(".manga");
let box_trigger = document.querySelector(".manga-widge");
let box_s = document.querySelector(".series");
let box_trigger_s = document.querySelector(".series-widge");

menu.addEventListener("click", () => {
    nav.classList.toggle("open")
})

box.addEventListener("click", () => {
    box_trigger.classList.toggle("opacity")
})

box_s.addEventListener("click", () => {
    box_trigger_s.classList.toggle("opacity-series")
})