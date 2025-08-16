const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

// Toggle menu on mobile
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Close menu when a nav link is clicked
document.querySelectorAll("#nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});

// Smooth scroll with header offset
const headerHeight = document.getElementById("header").offsetHeight;

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      const targetPosition = target.offsetTop - headerHeight + 10; // 10px padding
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
