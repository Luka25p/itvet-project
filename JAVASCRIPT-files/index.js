const prev = document.getElementById("prev");
const next = document.getElementById("next");
const main = document.getElementById("main");

let counter = 0;
console.log(counter)

next.addEventListener("click", () => {

    counter ++;


    main.classList.toggle("mainImg");
    main.classList.toggle("next");
});

prev.addEventListener("click", () => {

    counter --;


    main.classList.toggle("mainImg");
    main.classList.toggle("next");
});


const nightMode = document.getElementById("nightMode")
const header = document.getElementById("header")
const sideBar = document.getElementById("sideBar")
const filter = document.getElementById("filter")

nightMode.addEventListener("click", ()=>{
    header.classList.toggle("header")
    header.classList.toggle("nightMode")
    sideBar.classList.toggle("sideBar")
    sideBar.classList.toggle("nightMode-sidebar")
    filter.classList.toggle("nightfilter")
})