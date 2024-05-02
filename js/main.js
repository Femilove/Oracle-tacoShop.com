// Create a function to update the date and time
function updateDatetime() {

    // create a new date object
    const now = new Date();

    // get the current date and time as a string
    const currentdateTime = now.toLocaleString();

    // update the textContent property of the span element with the id of datetime
    document.querySelector("#year").textContent = currentdateTime;
}

// call the updateDatetime function every seconds
setInterval(updateDatetime, 1000)

