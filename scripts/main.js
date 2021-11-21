function burgerClick() {
    const overlay = document.getElementById("overlay");
    const body = document.getElementById("body");
    const burger = document.getElementById("burger");
    const burgerX = document.getElementById("burger-x");
    overlay.style.height = "100vh";
    if (overlay.style.visibility === "visible") {
        overlay.style.visibility = "hidden";
        body.style.overflow = "scroll";
        burger.style.display = "block";
        burgerX.style.display = "none";
    } else {
        overlay.style.visibility = "visible"; 
        body.style.overflow = "hidden";
        burger.style.display = "none";
        burgerX.style.display = "block";
    }
}

function nameClick() {
    window.location.reload(false); 
}