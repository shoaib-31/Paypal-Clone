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



let pos = 0;

function slide_r() {
    if (pos >= -17) {
        pos = pos - 17;
        document.getElementById("card_section").style.marginLeft = pos + "vw";
    }
    document.getElementById("slider_l").style.display = "block";
}
function slide_l() {
    pos = pos + 17;
    document.getElementById("card_section").style.marginLeft = pos + "vw";
    if (pos == 0) {
        document.getElementById("slider_l").style.display = "none";

    }
}