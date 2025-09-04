let userInput = document.getElementById("date");//input field
//setting max date as today's date
userInput.max = new Date().toISOString().split("T")[0];

let buttonCalculate = document.getElementById("calculate");//button
let result = document.getElementById("result");//result paragraph


buttonCalculate.addEventListener("click", calculateAge);//adding the click event to the button

//function to calculate age
function calculateAge() {
    let birthDate = new Date(userInput.value); //getting user input date
    if (userInput.value === "" || birthDate > new Date()) {
        alert("Please enter a valid date of birth.");
        return;
    }

    //extracting date, month, year from the user input date
    let date1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1; // Months are zero-based
    let year1 = birthDate.getFullYear();

    let today = new Date();//getting today's date

    //extracting date, month, year from today's date
    let date2 = today.getDate();
    let month2 = today.getMonth() + 1; // Months are zero-based
    let year2 = today.getFullYear();

    //storing the date, month, year values
    let dateDiff, monthDiff, yearDiff;

    yearDiff = year2 - year1;//year difference

    if (month2 >= month1) {
        monthDiff = month2 - month1;//month difference
    }
    else {
        yearDiff--;//reduce year by 1
        monthDiff = 12 + month2 - month1;//month difference
    }

    if (date2 >= date1) {
        dateDiff = date2 - date1;//date difference
    }
    else {
        monthDiff--;//reduce month by 1
        //get the number of days in previous month
        dateDiff = getDaysInMonth(year1, month1) + date2 - date1;
    }
    
    
    if (monthDiff < 0) {
        monthDiff = 11;
        yearDiff--;
    }
    //display the result
    result.innerHTML = `You are <span>${yearDiff} </span>years, <span>${monthDiff}</span> months, and <span>${dateDiff}</span> days old.`;
}

//function to get the number of days in a month
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}