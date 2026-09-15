const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});