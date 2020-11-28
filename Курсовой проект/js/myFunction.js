/*--start openMenu--*/
function openMenu() {
    let menu = document.querySelector("#nav");
    if (menu.className === "nav-hor") {
        menu.className += " open";
    } else {
        menu.className = "nav-hor";
    }
};
/*--end openMenu--*/

/*--start scroll fixed nav--*/
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let nav = document.querySelector("#nav");

    if (document.body.clientWidth > 723) {
        console.log()
        if (window.pageYOffset > header.clientHeight + 10) {
            nav.classList.add("fixed");
        } else {
            nav.classList.remove("fixed");
        }
    }
});
/*--end scroll fixed nav--*/

/*--start scriptSlider--*/
let scriptSlider = document.createElement("script");
scriptSlider.src = "./js/slider.js";
setTimeout(() => {
    let headerSlider = document.querySelector(".header_slider");
    headerSlider.append(scriptSlider);
}, 1000)

/*--end scriptSlider--*/