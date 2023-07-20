$(document).ready(function() {
    var imageContainers = $(".img-container");
    var imageDescriptions = $(".img-desc");
  
    imageContainers.each(function() {
      $(this).on("mouseover", function() {
        // Hide all descriptions
        imageDescriptions.css("opacity", 0);
  
        // Show the description for the current image
        var description = $(this).find(".img-desc");
        if (description) {
          description.css("opacity", 1);
        }
      });
  
      $(this).on("mouseout", function() {
        // Hide all descriptions when the mouse leaves the container
        imageDescriptions.css("opacity", 0);
      });
    });
  });