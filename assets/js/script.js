// Jumbotron present day,date that displays under header
var today = moment();
// Same as getelementbyid in jquery
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// Times array. Moments will use military time (0-24) for below function of past, present, future colors
var hoursArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
//Creates HTML elements for our planner's time rows
hoursArray.forEach(function(hour) {
    // Variables for each 'create element'
    var row = $('<div>');
    var timeColumn = $('<div>');
    var textColumn = $('<textarea>');
    var saveButton = $('<button>');

    // Add the classes we need to each element
    row.addClass('row time-block');
    timeColumn.addClass('col-1 hour');
    textColumn.addClass('col-10 description');
    saveButton.addClass('col-1 btn saveBtn');

    row.attr('id', hour);
    // add text to save button
    saveButton.text('save');

    //Change hour from military time to text showing standard time
    if  (hour < 12) {
    timeColumn.text(hour + ':00 AM');
    } else if (hour === 12) {
    timeColumn.text('12:00 PM');
    } else if (hour === 13) {
    timeColumn.text('1:00 PM');
    } else if (hour === 14) {
    timeColumn.text('2:00 PM');
    } else if (hour === 15) {
    timeColumn.text('3:00 PM');
    } else if (hour === 16) {
    timeColumn.text('4:00 PM');
    } else if (hour === 17) {
    timeColumn.text('5:00 PM');
    }

    // Append the time, text, save button, to each row div, and then to the container
    row.append(timeColumn, textColumn, saveButton);
    $('.container').append(row);
})


// Function for adding different class colors if in past, present, or future
// moment.hours is always 0-24
var presentHour = moment().hours();
$('.time-block').each(function(){
    var hourTime = parseInt($(this).attr('id'));
    // comparing to the number from hoursArray
    if (hourTime < presentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    } 
    else if (hourTime === presentHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})


//Function for save button event listener to save to local storage
function saveEventInformation () {
    var time = $(this).parent().attr('id');
    var textForDescription = $(this).siblings('.description').val();
    localStorage.setItem(time, textForDescription);
}


//Function to retrieve info from local storage
hoursArray.forEach(function(hour) {
    $(`#${hour} .description`).val(localStorage.getItem(hour));
})


//Save button event listener must go after function
$('.saveBtn').click(saveEventInformation);