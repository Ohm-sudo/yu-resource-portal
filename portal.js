var buttonState = 'default';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var button = document.getElementById("darkMode")
    var img = document.getElementById("york-logo");

    if(buttonState === 'default') {
        buttonState = "alternate";
        button.innerHTML = "☀️ Light Mode";
        img.src = "pictures/york-logo-dm.png";
    }
    else {
        buttonState = "default";
        button.innerHTML = "🌙 Dark Mode";
        img.src = "pictures/york-logo.png";
    }
  } 