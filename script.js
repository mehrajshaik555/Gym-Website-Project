function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function donate() {
    alert("Thank you for helping animals ❤️🐾");
}

/* Fade Animation */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (position < screen) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});