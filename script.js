// Welcome Button
function joinNow() {
    alert("🔥 Welcome to fitness Gym 💪");
}

// =============================
// Scroll Reveal Animation
// =============================
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 150); // delay effect
        }
    });
}

window.addEventListener("scroll", revealCards);


// =============================
// Navbar Background Change
// =============================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "#111";
        nav.style.transition = "0.5s";
    } else {
        nav.style.background = "linear-gradient(90deg, #ff512f, #dd2476)";
    }
});


// =============================
// Smooth Active Link Highlight
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href").includes(current)) {
            link.style.color = "yellow";
        }
    });
});


// =============================
// Button Click Animation Effect
// =============================
const button = document.querySelector(".hero button");

button.addEventListener("click", () => {
    button.innerHTML = "Joining...";
    button.style.background = "green";

    setTimeout(() => {
        button.innerHTML = "Join Now";
        button.style.background = "#ff512f";
    }, 2000);
});


// =============================
// Scroll Progress Bar (Top)
// =============================
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "yellow";
progressBar.style.width = "0%";
progressBar.style.zIndex = "2000";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    progressBar.style.width = scrolled + "%";
});


// =============================
// Mouse Move Glow Effect
// =============================
document.addEventListener("mousemove", (e) => {
    document.body.style.backgroundPosition = `${e.clientX/50}px ${e.clientY/50}px`;
});