var buttonState = 'default';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var button = document.getElementById("darkModeB")
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

  function toggleTag(name) {
    var tag = document.getElementById(name);

    

    if(name == "menu-items")
    {
        if(subtitle.style.display === 'none') {
            subtitle.style.display = 'flex';
            darkModeB.style.display = 'flex';
            tag.style.display = 'none';
        }
        else {
            subtitle.style.display = 'none';
            darkModeB.style.display = 'none';
            tag.style.display = 'flex';
        }
    }
    else
    {
        if(tag.style.display === 'none') {
            tag.style.display = 'inline-block';
        } else {
            tag.style.display = 'none';
        }
    }
  }