document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("response-message").classList.remove("hidden");
            form.reset();
        } else {
            alert("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
        }
    }).catch(error => {
        alert("مشکلی در ارسال پیام به وجود آمده است.");
    });
});
