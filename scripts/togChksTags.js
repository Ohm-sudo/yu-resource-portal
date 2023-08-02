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
    const checkbox = $('#' + checkboxId);
    if (!checkbox.length) return;

    const targetId = checkbox.data('target');
    if (!targetId) return;

    const element = $('#' + targetId);

    if (checkbox.prop('checked')) {
      element.css('display', 'inline-block');
    } else {
      element.css('display', 'none');
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

// Updates selAll based on checkboxes checked/unchecked in their column
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
  
    // Update "select/unselect all" checkboxes
    for(i = 1; i <= 5; i++)
        if (this.classList.contains('column' + i))
            updateSelectAllCheckbox('column' + i, 'selAll' + i);
  
    saveCheckboxStates();
  });

// Updates selAll chexboxes in real time
$('#selAll1').on('change', function() {
    $('.column1').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column1').trigger('change');
});

$('#selAll2').on('change', function() {
    $('.column2').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column2').trigger('change');
});

$('#selAll3').on('change', function() {
    $('.column3').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column3').trigger('change');
});

$('#selAll4').on('change', function() {
    $('.column4').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column4').trigger('change');
});

$('#selAll5').on('change', function() {
    $('.column5').prop('checked', this.checked);
    saveCheckboxStates();
    $('.column5').trigger('change');
});

loadCheckboxStates();

$('input[type="checkbox"]').each(function() {
    toggleElementDisplay(this.id);
  });
