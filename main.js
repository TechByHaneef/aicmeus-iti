function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // If menu is open and click is outside nav or hamburger
    if (nav.classList.contains('show') &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        nav.classList.remove('show');
    }
});
