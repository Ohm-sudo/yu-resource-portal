barState = false; // Menu bar is hidden when opening webpage

// Toggle the expanded menu bar
function toggleTag(name) {
    var tag = document.getElementById(name);
    if(barState == true) {
        tag.style.display = 'none';
        barState = false;
    }
    else {
        tag.style.display = 'flex';
        barState = true;
    }
}

// Checks checkboxes and determines if the element should be added/removed
function blankCheck() {
    const checkedCount = $('input[type="checkbox"]:checked').length;
    // const mySection = $('#portalbody');
    const blankMsg = $('#defMsg');

    if(checkedCount === 0)
    {
        // Add new element
        blankMsg.show();
    } else {
        // Remove element
        blankMsg.hide();
    }
}

$('input[type="checkbox"]').on('change', blankCheck);
$(document).ready(function() {
    blankCheck();
});

// Toggles resources that appear as part of the webpage's contents
function toggleElementDisplay(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if(!checkbox) return;

    const targetId = checkbox.getAttribute('data-target');
    if(!targetId) return;

    const element = document.getElementById(targetId);

    if (checkbox.checked) {
        element.style.display = 'inline-block';
    } else {
        element.style.display = 'none';
    }
}

// Checkbox states are saved
function saveCheckboxStates() {
    const checkboxes = $('input[type="checkbox"]');
    const checkboxStates = {};
    checkboxes.each(function () {
        checkboxStates[this.id] = this.checked;
    });
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}


// Checkbox states are loaded
function loadCheckboxStates() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates'));
    if (checkboxStates) {
        const checkboxes = $('input[type="checkbox"]');
        checkboxes.each(function () {
            if (checkboxStates[this.id]) {
                this.checked = checkboxStates[this.id];
                toggleElementDisplay(this.id);
            }
        });
    }
}

// Updates selAll1 and selAll2 based on checkboxes checked/unchecked in their column
function updateSelectAllCheckbox(columnClassName, selectAllCheckboxId) {
    const checkboxesInColumn = $(`.${columnClassName}`).not(`#${selectAllCheckboxId}`);
    const allChecked = checkboxesInColumn.toArray().every(checkbox => checkbox.checked);
    $(`#${selectAllCheckboxId}`).prop('checked', allChecked);
  }
  
  $('input[type="checkbox"]').on('change', function() {
    const targetId = this.getAttribute('data-target');
    if (targetId) {
      toggleElementDisplay(this.id, targetId);
    }
  
    // Update "select/unselect all" checkbox for column1 and column2
    for(i = 1; i <= 2; i++)
        if (this.classList.contains('column' + i))
            updateSelectAllCheckbox('column' + i, 'selAll' + i);
  
    saveCheckboxStates();
  });

// Updates selAll1 in real time
$('#selAll1').on('change', function() {
    $('.column1').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column1').trigger('change');
});

// Updates selAll1 in real time
$('#selAll2').on('change', function() {
    $('.column2').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column2').trigger('change');
});

loadCheckboxStates();

$('input[type="checkbox"]').each(function() {
    toggleElementDisplay(this.id);
  });
