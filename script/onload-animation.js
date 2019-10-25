 window.onload = init;

function init() {
    const element = document.querySelector("#hidden");
    element.classList.add("hidden-2");
    const element2 = document.querySelector(".oui");
    element2.classList.add("oui-2");
    setTimeout(suite, 1000);
}
function suite() {
    const element4 = document.querySelector(".oui-2");
    element4.classList.add("oui-3");
    setTimeout(suite2, 1000);
}
function suite2() {
    const element5 = document.querySelector(".pop");
    element5.classList.add("first-page2")
    setTimeout(suite3, 1000);
}
function suite3() {
    const element6 = document.querySelector(".first-page2");
    element6.classList.add("first-page3")
}