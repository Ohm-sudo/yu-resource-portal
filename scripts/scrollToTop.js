// Scroll to top button appears when scrolling down on webpage
function showBackToTopButton() {
    const button = $("#backToTop");
    if ($(document.body).scrollTop() > 20 || $(document.documentElement).scrollTop() > 20) {
      button.css("display", "block");
    } else {
      button.css("display", "none");
    }
  }

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(window).on('scroll', function() {
    const menu = $('#menu-bar');
    const darkModeIcon = $('#darkModeB');
    const menuItems = $('#menu-items');
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > 0) {
      menu.addClass('fixed');
      darkModeIcon.addClass('fixed');
      menuItems.addClass('fixed');
    } else {
      menu.removeClass('fixed');
      darkModeIcon.removeClass('fixed');
      menuItems.removeClass('fixed');
    }
});

$(window).on("scroll", showBackToTopButton);
