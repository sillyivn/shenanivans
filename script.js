// Find the button in the HTML
const themeBtn = document.getElementById('theme-btn');

// Listen for a click on the button
themeBtn.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body tag
    document.body.classList.toggle('dark-mode');
});
