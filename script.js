const darkModeToggle = document.getElementById("toggle-Darkmode");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Modo claro
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Modo oscuro
    }
});
