const personal = document.getElementById("personal");
const dropdown1 = document.getElementById("dropdown1");
const business = document.getElementById("business");
const dropdown2 = document.getElementById("dropdown2");
const enterprise = document.getElementById("enterprise");
const dropdown3 = document.getElementById("dropdown3");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("logo");
const developer = document.getElementById("Developer");
const card_section = document.getElementById("card_section");
const burger = document.getElementById("item4");
const cross = document.getElementsByClassName("burger");
const side_m = document.getElementById("side_m");
const scroll = document.getElementById("scroll");
//DROPDOWN 1

personal.addEventListener("mouseover", () => {
    //DROPDOWN 1 ADD
    dropdown1.classList.add("h_effect");
    dropdown1.classList.remove("h_make_0");
    overlay.style.display = "block";
    //OTHERS REMOVE
    dropdown2.classList.remove("h_effect");
    // overlay.style.display = "none";
    dropdown2.classList.add("h_make_0");
});
dropdown1.addEventListener("mouseleave", () => {
    dropdown1.classList.remove("h_effect");
    overlay.style.display = "none";
    dropdown1.classList.add("h_make_0");
});
logo.addEventListener("mouseover", () => {
    dropdown1.classList.remove("h_effect");
    overlay.style.display = "none";
    dropdown1.classList.add("h_make_0");

});

//DROPDOWN 2

business.addEventListener("mouseover", () => {
    //DROPDOWN 2 ADD
    dropdown2.classList.add("h_effect");
    dropdown2.classList.remove("h_make_0");
    overlay.style.display = "block";

    //OTHERS REMOVE
    dropdown1.classList.remove("h_effect");
    // overlay.style.display = "none";
    dropdown1.classList.add("h_make_0");
    dropdown3.classList.remove("h_effect");
    // overlay.style.display = "none";
    dropdown3.classList.add("h_make_0");
});
dropdown2.addEventListener("mouseleave", () => {
    dropdown2.classList.remove("h_effect");
    overlay.style.display = "none";
    dropdown2.classList.add("h_make_0");
});
//DROPDOWN 3

enterprise.addEventListener("mouseover", () => {
    //DROPDOWN 3 ADD
    dropdown3.classList.add("h_effect");
    dropdown3.classList.remove("h_make_0");
    overlay.style.display = "block";

    //OTHERS REMOVE
    dropdown2.classList.remove("h_effect");
    // overlay.style.display = "none";
    dropdown2.classList.add("h_make_0");
});
dropdown3.addEventListener("mouseleave", () => {
    dropdown3.classList.remove("h_effect");
    overlay.style.display = "none";
    dropdown3.classList.add("h_make_0");
});
developer.addEventListener("mouseover", () => {
    dropdown3.classList.remove("h_effect");
    overlay.style.display = "none";
    dropdown3.classList.add("h_make_0");

});

//SLIDERS

let pos = 0;

function slide_r() {

        if (pos >= -17) {
            pos = pos - 34;
            document.getElementById("card_section").style.marginLeft = pos + "vw";
            console.log(window.innerWidth);
        }
        document.getElementById("slider_l").style.display = "flex";
}
function slide_l() {
        pos = pos + 34;
        document.getElementById("card_section").style.marginLeft = pos + "vw";
        if (pos == 0) {
            document.getElementById("slider_l").style.display = "none";

        }
}

//BURGER
let a = false;

burger.addEventListener("click", () => {
    if (a == false) {
        burger.innerHTML = `<i class="fa fa-close" style="color: #001c64; font-size: 3rem;"></i>`;
        a = true;
        side_m.innerHTML = ` <div class="side">Personal <span>></span></div>
        <div class="side">Business <span>></span></div>
        <div class="side">Enterprise <span>></span></div>
        <div class="side">Developer </div>
        <div class="side">Help</div>`;
        side_m.style.width = "100%";
        scroll.classList.add("scroll");

    }
    else {
        burger.innerHTML = `<i style="color: #001c64; font-size: 3rem;" class="fa fa-solid fa-bars"></i>`;
        a = false;
        side_m.style.width = "0%";
        side_m.innerHTML = ``;
        scroll.classList.remove("scroll");
    }
});

