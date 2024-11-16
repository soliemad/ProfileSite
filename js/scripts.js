function toggleTheme() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.getElementById("theme-icon").src = "media/icons/dark_mode.svg";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.getElementById("theme-icon").src = "media/icons/light_mode.svg";
    }
}