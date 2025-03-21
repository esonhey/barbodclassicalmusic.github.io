function createMusicNote() {
    const notes = ['♪', '♫', '♬', '♩']; // انواع نت‌های موسیقی
    const note = document.createElement('span');
    note.classList.add('music-note');
    note.innerText = notes[Math.floor(Math.random() * notes.length)];

    const container = document.querySelector('.music-notes-container');
    container.appendChild(note);

    // موقعیت تصادفی در محدوده‌ای کوچک
    note.style.top = `${Math.random() * 40 - 20}px`;

    // بعد از مدتی نت حذف شود
    setTimeout(() => {
        note.remove();
    }, 3000);
}

// هر چند وقت یک‌بار نت ایجاد شود
setInterval(createMusicNote, 700);
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
} else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


