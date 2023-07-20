// Web page dark mode setting
function darkMode() {
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeB")
    var isDarkMode = body.classList.toggle("dark-mode");

    // Store dark mode preferences in localStorage
    localStorage.setItem('darkMode', isDarkMode)

    // Update toggle button based on current mode
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    
    var img = document.getElementById("york-logo");
    var imageSrc = isDarkMode ? "pictures/york-logo-dm.png" : "pictures/york-logo.png";
    img.src = imageSrc;
}

$(document).ready(function() {
  // Check dark mode preference on load
  var darkModeToggle = $('#darkModeB');

  // Retrieve dark mode preference from localStorage
  var isDarkMode = localStorage.getItem('darkMode');

  if (isDarkMode === 'true') {
    $('body').addClass('dark-mode');
    darkModeToggle.text('☀️');
  } else {
    $('body').removeClass('dark-mode');
    darkModeToggle.text('🌙');
  }

  // Change image based on dark mode preference
  var img = $('#york-logo');
  var imageSrc = isDarkMode === 'true' ? "pictures/york-logo-dm.png" : "pictures/york-logo.png";
  img.attr('src', imageSrc);
});
