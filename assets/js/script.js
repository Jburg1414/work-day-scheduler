$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var currentTime = moment().hour();
console.log(currentTime);

// use set interval for updating color

function colorUpdate() {
    $(".time-block").each(function(){ 
        if ($(this).children(".hour").data("time") < currentTime) {
            $(this).children(".description").addClass("past");
        } else if ($(this).children(".hour").data("time") = currentTime) {
            $(this).children(".description").addClass("present");
        } else {
            $(this).children(".description").addClass("future");
        };
    });
};


// one event listener for saveBtn

colorUpdate();