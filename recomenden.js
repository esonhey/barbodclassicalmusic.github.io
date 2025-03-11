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



