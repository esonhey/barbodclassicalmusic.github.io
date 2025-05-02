// public/theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;
    const isDark = localStorage.getItem("theme") === "dark";
  
    if (isDark) {
      body.classList.add("dark");
      toggle.textContent = "☀️ روشن";
    }
  
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const darkMode = body.classList.contains("dark");
      toggle.textContent = darkMode ? "☀️ روشن" : "🌙 تاریک";
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    });
  });
  