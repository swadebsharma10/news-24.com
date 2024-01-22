export function showCurrentDateTime() {
  
    let currentDate = new Date();
  
    // Get the current day
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];
  
    // Get the current date, month, and year
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    var year = currentDate.getFullYear();
  
    // Display the result
    return ` ${dayOfWeek} , ${day} , ${ month }, ${year}`
  }
  
