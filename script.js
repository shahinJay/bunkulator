function attendancePercentage(totalHoursTaken, totalHoursAttended) {
  let percentage = totalHoursAttended/totalHoursTaken*100;
  return percentage;
}

function bunkableHours(totalHours, totalHoursTaken, totalHoursAttended) {

  let hoursNotAttended = totalHoursTaken-totalHoursAttended;
  let totalBunkable = totalHours * 0.25;

  let bunkableHours = totalBunkable - hoursNotAttended;
  return bunkableHours;

}

function needHours(totalHours, totalHoursAttended, totalTakenHours) {
    let finalPercentage = 0
    let hoursNeeded = 0
    while (finalPercentage <= 75)
    {
        
    }
}

function displayP(percentage) {
  document.getElementById("displayP").innerText = percentage;
}

let totalHours = document.getElementById("totalHours").value;
let totalHoursTaken = document.getElementById("totalHoursTaken").value;
let totalHoursAttended = document.getElementById("totalHoursAttended").value;

let bunkableHours = bunkableHours(totalHours, totalHoursTaken, totalHoursAttended);
let attendancePercentage = attendancePercentage(totalHoursTaken, totalHoursAttended);
let needHours = needHours(totalHours, totalHoursAttended, totalHoursTaken);
