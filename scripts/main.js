function burgerClick() {
    console.log("t");
    const overlay = document.getElementById("overlay");
    const overlayInner = document.getElementById("overlay-inner");
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    const burger = document.getElementById("burger");
    const burgerX = document.getElementById("burger-x");
    overlay.style.height = "100vh";
    if (overlayInner.style.top === "0px") {
        console.log("if");
        overlay.style.visibility = "hidden";
        overlayInner.style.top = "-100vh";
        body.style.overflow = "scroll";
        burger.style.transform = "scale(1)";
        burgerX.style.transform = "scale(0)";
    } else {
        console.log("else")
        overlay.style.visibility = "visible";
        overlayInner.style.top = "0px";
        body.style.overflow = "hidden";
        burger.style.transform = "scale(0)";
        burgerX.style.transform = "scale(1)";
    }
}

function nameClick() {
    window.location.reload(false); 
}