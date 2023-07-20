// Scroll to top button appears when scrolling down on webpage
function showBackToTopButton() {
    var button = document.getElementById("backToTop");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu-bar');
    var darkModeIcon = document.getElementById('darkModeB');
    var menuItems = document.getElementById('menu-items');
    var scrollPosition = window.scrollY;

    if(scrollPosition > 0) {
        menu.classList.add('fixed');
        darkModeIcon.classList.add('fixed');
        menuItems.classList.add('fixed');

    } else {
        menu.classList.remove('fixed');
        darkModeIcon.classList.remove('fixed');
        menuItems.classList.remove('fixed');
    }
});

window.onscroll = function() { showBackToTopButton() };
