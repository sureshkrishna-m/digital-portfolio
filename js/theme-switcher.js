const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-toggle__label");
const themeIcon = document.querySelector(".theme-toggle__icon");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const yearElement = document.querySelector("#current-year");

function setTheme(theme) {
    const darkTheme = theme === "dark";
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute("aria-label", `Switch to ${darkTheme ? "light" : "dark"} theme`);
    themeButton.setAttribute("aria-pressed", String(darkTheme));
    themeLabel.textContent = darkTheme ? "Light" : "Dark";
    themeIcon.textContent = darkTheme ? "☼" : "◐";
}

setTheme("dark");

themeButton.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

function closeNavigation(returnFocus = false) {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    if (returnFocus) {
        menuButton.focus();
    }
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 900px)").matches) {
        closeNavigation();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeNavigation(true);
    }
});

yearElement.textContent = String(new Date().getFullYear());

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const observedSections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section instanceof HTMLElement);

function updateActiveNavigation() {
    const activationLine = window.innerHeight * 0.45;
    let activeSection = observedSections[0];

    for (const section of observedSections) {
        if (section.getBoundingClientRect().top <= activationLine) {
            activeSection = section;
        } else {
            break;
        }
    }

    for (const link of sectionLinks) {
        if (link.getAttribute("href") === `#${activeSection?.id}`) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    }
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
window.addEventListener("hashchange", updateActiveNavigation);
updateActiveNavigation();
