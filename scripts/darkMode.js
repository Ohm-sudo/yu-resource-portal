// Web page dark mode setting
function darkMode() {
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeB")
    var isDarkMode = body.classList.toggle("dark-mode");
    $('#webTitle').toggleClass('dark-mode');
    $('#menu-bar, #subtitle').toggleClass('menu-bar-1-dm');
    $('#portalbody').toggleClass('portal-body-dm');
    $('#hamburger-box, #darkModeB, #menu-items, #backToTop').toggleClass('menu-bar-2-dm');

    // Store dark mode preferences in localStorage
    localStorage.setItem('darkMode', isDarkMode)

    // Update toggle button based on current mode
    darkModeToggle.textContent = isDarkMode ? '🌙' : '☀️';
}

$(document).ready(function() {
  // Check dark mode preference on load
  var darkModeToggle = $('#darkModeB');

  // Retrieve dark mode preference from localStorage
  var isDarkMode = localStorage.getItem('darkMode');

  if (isDarkMode === 'true') {
    $('body, #webTitle').addClass('dark-mode');
    $('#menu-bar, #subtitle').addClass('menu-bar-1-dm');
    $('#portalbody').addClass('portal-body-dm');
    $('#hamburger-box, #darkModeB, #menu-items, #backToTop').addClass('menu-bar-2-dm');
    darkModeToggle.text('🌙');
  } else {
    $('body, #webTitle').removeClass('dark-mode');
    $('#menu-bar, #subtitle').removeClass('menu-bar-1-dm');
    $('#portalbody').removeClass('portal-body-dm');
    $('#hamburger-box, #darkModeB, #menu-items, #backToTop').removeClass('menu-bar-2-dm');
    darkModeToggle.text('☀️');
  }
});
