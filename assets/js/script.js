$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var currentTime = moment().hour();
console.log(currentTime);

function colorUpdate() {
    $(".time-block").each(function(){ 
        if ($(this).children(".hour").data("time") < currentTime) {
            $(this).children(".description").addClass("past");
        } else if ($(this).children(".hour").data("time") == currentTime) {
            $(this).children(".description").addClass("present");
        } else {
            $(this).children(".description").addClass("future");
        };
    });
};

// one event listener for saveBtn

$(".saveBtn").click(function(){
    var saveText = $(this).siblings(".description").val();
    console.log(saveText);
    var selectedTime = $(this).siblings(".hour").data("time");
    localStorage.setItem(selectedTime, saveText);
    
});

// return localStorage.getItem(selectedTime, saveText);

colorUpdate();
$("#9").val(localStorage.getItem(9));
$("#10").val(localStorage.getItem(10));
$("#11").val(localStorage.getItem(11));
$("#12").val(localStorage.getItem(12));
$("#13").val(localStorage.getItem(13));
$("#14").val(localStorage.getItem(14));
$("#15").val(localStorage.getItem(15));
$("#16").val(localStorage.getItem(16));
$("#17").val(localStorage.getItem(17));
