function darkMode() {
    var element = document.body;
    var darkModeToggle = document.getElementById("darkModeB")
    var isDarkMode = element.classList.toggle("dark-mode");

    // Store dark mode preferences in localStorage
    localStorage.setItem('darkMode', isDarkMode)

    // Update toggle button based on current mode
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    
    var img = document.getElementById("york-logo");
    var imageSrc = isDarkMode ? "pictures/york-logo-dm.png" : "pictures/york-logo.png";
    img.src = imageSrc;
}

function toggleTag(name) {
    var tag = document.getElementById(name);

    if(name == "menu-items")
    {
        if(subtitle.style.display === 'none') {
            subtitle.style.display = 'flex';
            //darkModeB.style.display = 'flex';
            tag.style.display = 'none';
        }
        else {
            subtitle.style.display = 'none';
            //darkModeB.style.display = 'none';
            tag.style.display = 'flex';
        }
    }
}

function checkCheckboxState(checkbox) {
    var checkboxId = checkbox.id;
    var targetId = checkbox.dataset.target;
    var targetElement = document.getElementById(targetId);

    var checkboxLabels = [];

    for (var i = 1; i <= 9; i++) {
        var label = "Checkbox" + i;
        checkboxLabels.push({ id: "checkbox" + i, label: label});
    }

    var label = checkboxLabels.find(function(item) {
        return item.id === checkboxId;
    });

    if(checkbox.checked) {
        targetElement.style.display = 'inline-block';
    } else {
        targetElement.style.display = 'none';
    }
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

    var img = document.getElementById("york-logo");
    var imageSrc = isDarkMode === 'true' ? "pictures/york-logo-dm.png" : "pictures/york-logo.png";
    img.src = imageSrc;
    
    // Check state of each checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            checkCheckboxState(event.target);
        });
        checkCheckboxState(checkbox);
    });
});