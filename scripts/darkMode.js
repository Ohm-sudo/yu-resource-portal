// Web page dark mode setting
function darkMode() {
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeB")
    var isDarkMode = body.classList.toggle("dark-mode");

    // Store dark mode preferences in localStorage
    localStorage.setItem('darkMode', isDarkMode)

    // Update toggle button based on current mode
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
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
});
