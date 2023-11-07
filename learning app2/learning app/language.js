document.addEventListener("DOMContentLoaded", function() {
    const languageOptions = document.querySelectorAll('.language-option');

    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const language = this.id;
            window.location.href = `levels-${language}.html`; // Example: levels-english.html
        });
    });
});
