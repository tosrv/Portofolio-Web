// navbar link function
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // get id
    const targetId = this.getAttribute("data-target");
    const targetEl = document.getElementById(targetId);

    // scroll to id
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// change theme function
function changeTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("themeToggle");

  // get current theme
  const currentTheme = html.getAttribute("data-bs-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // save theme to local storage
  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // match icon to current theme
  const iconClass = newTheme === "dark" ? "bi-sun-fill" : "bi-moon-fill";
  icon.classList.remove("bi-moon-fill", "bi-sun-fill");

  // saved theme icon
  icon.classList.add(iconClass);
  localStorage.setItem("themeIcon", iconClass);
}

// use saved theme to display
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme") || "light";
  const iconClass = localStorage.getItem("themeIcon") || "bi-moon-fill";

  const html = document.documentElement;
  const icon = document.getElementById("themeToggle");

  html.setAttribute("data-bs-theme", theme);
  icon.classList.add(iconClass);
});

// swiper function for tech-stack
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 50, // space per item
  loop: true, // looped item to move
  speed: 4000, // move speed
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
