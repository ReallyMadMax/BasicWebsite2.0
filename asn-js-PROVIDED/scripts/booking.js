/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var CPD = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click",function(){mondayButton.classList.toggle("clicked")});
mondayButton.addEventListener("click",calculate);

var tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click",function(){tuesdayButton.classList.toggle("clicked")});
tuesdayButton.addEventListener("click",calculate);

var wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click",function(){wednesdayButton.classList.toggle("clicked")});
wednesdayButton.addEventListener("click",calculate);

var thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click",function(){thursdayButton.classList.toggle("clicked")});
thursdayButton.addEventListener("click",calculate);

var fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click",function(){fridayButton.classList.toggle("clicked")});
fridayButton.addEventListener("click",calculate);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function reset(){
    CPD = 35;
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    calculate();
}

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click",reset);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function swapRate(){
    if (CPD == 20){
        CPD = 35;
        halfDayButton.classList.remove("clicked");
        fullDayButton.classList.add("clicked");
    } else{
        CPD = 20;
        halfDayButton.classList.add("clicked");
        fullDayButton.classList.remove("clicked");
    }
    calculate();
}

var fullDayButton = document.getElementById("full");
var halfDayButton = document.getElementById("half");
fullDayButton.addEventListener("click",swapRate);
halfDayButton.addEventListener("click",swapRate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    document.getElementById("calculated-cost").textContent = CPD*(document.getElementsByClassName("clicked").length - 1);
}
