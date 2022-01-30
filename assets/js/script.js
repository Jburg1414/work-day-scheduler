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

// $("container").
colorUpdate();