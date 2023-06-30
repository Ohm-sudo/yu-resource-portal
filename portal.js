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

// Toggle the expanded menu bar
function toggleTag(name) {
    var tag = document.getElementById(name);
    if(subtitle.style.display === 'none') {
        subtitle.style.display = 'block';
        tag.style.display = 'none';
    }
    else {
        subtitle.style.display = 'none';
        tag.style.display = 'flex';
    }
}

//
function chkCheckboxState(checkbox) {
    var targetId = checkbox.dataset.target;
    var targetElement = document.getElementById(targetId);

    // Element appears if checkbox is checked, otherwise missing
    if(checkbox.checked) {
        targetElement.style.display = 'inline-block';
    } else {
        targetElement.style.display = 'none';
    }
}

function toggleCheckboxes(category, isChecked) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][data-category="' + category + '"]');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = isChecked;
        chkCheckboxState(checkboxes[i]);
    }    
}

function updChkbox(category, masterID) {
    var updChkbox = document.getElementById(masterID);
    var checkboxes = document.querySelectorAll('input[type="checkbox"][data-category="' + category +'"]');

    var allChecked = true;
    for (var i = 0; i < checkboxes.length; i++) {
        if(!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }
    updChkbox.checked = allChecked;
}

document.addEventListener("DOMContentLoaded", function() {
    // Check dark mode preference on load
    var darkModeToggle = document.getElementById('darkModeB');
    
    // Retrieve dark mode preference from localStorage
    var isDarkMode = localStorage.getItem('darkMode');

    if(isDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
    else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙';
    }

    // Change image based on dark mode preference
    var img = document.getElementById("york-logo");
    var imageSrc = isDarkMode === 'true' ? "pictures/york-logo-dm.png" : "pictures/york-logo.png";
    img.src = imageSrc;
    
    // Check state of each checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            chkCheckboxState(event.target);
        });
        chkCheckboxState(checkbox);
    });

    var imageContainers = document.querySelectorAll(".img-container");
    var imageDescriptions = document.querySelectorAll(".img-desc");

            imageContainers.forEach(function(container) {
                container.addEventListener("mouseover", function() {
                    // Hide all descriptions
                    imageDescriptions.forEach(function(description) {
                        description.style.opacity = 0;
                    });

                    // Show the description for the current image
                    var description = container.querySelector(".img-desc");
                    if (description) {
                        description.style.opacity = 1;
                    }
                });

                container.addEventListener("mouseout", function() {
                    // Hide all descriptions when mouse leaves the container
                    imageDescriptions.forEach(function(description) {
                        description.style.opacity = 0;
                    });
                });
            });
});