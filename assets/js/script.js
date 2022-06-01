// Jumbotron present day,date that displays under header
var today = moment();
// Same as getelementbyid in jquery
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// times array that will display
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//Creates HTML elements for our planner's time rows
hoursArray.forEach(function(hour) {
    // Variables for each 'create element'
    var rowDiv = $('<div>');
    var timeColumn = $('<div>');
    var textColumn = $('<textarea>');
    var saveButtonColumn = $('<button>');

    // Add the classes we need to each element
    rowDiv.addClass('row time-block');
    timeColumn.addClass('col-1 hour');
    textColumn.addClass('col-10 description');
    saveButtonColumn.addClass('col-1 btn saveBtn');

    rowDiv.attr('id', hour);
    // add text to time
    timeColumn.text(hour + ':00');
    // add text to save button
    saveButtonColumn.text('save');

    // Append the time, text, save button, to each row div, and then to the container
    rowDiv.append(timeColumn, textColumn, saveButtonColumn);
    $('.container').append(rowDiv);
})

// Function for adding different class colors if in past, present, or future
var presentHour = moment().hours();
$('.time-block').each(function(){
    var hourTime = parseInt($(this).attr('id'));
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