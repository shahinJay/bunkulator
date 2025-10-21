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
        hoursNeeded += 1
        finalPercentage = (100*(totalHoursAttended+hoursNeeded)/totalHoursTaken+hoursNeeded)
    }
    return hoursNeeded
}

function displayPercentage(percentage) {
  document.getElementById("displayP").innerText = percentage;
}

function displayHoursNeeded(hours) {
  document.getElementById("displayHN").innerText = hours;
}

function displayBunkableHours(hours) {
  document.getElementById("displayBH").innerText = hours;
}

function calculate() {
  let totalHours = document.getElementById("totalHours").value;
  let totalHoursTaken = document.getElementById("totalHoursTaken").value;
  let totalHoursAttended = document.getElementById("totalHoursAttended").value;

  let bunkableHoursResult = bunkableHours(totalHours, totalHoursTaken, totalHoursAttended);
  let attendancePercentageResult = attendancePercentage(totalHoursTaken, totalHoursAttended);
  let needHoursResult = needHours(totalHours, totalHoursAttended, totalHoursTaken);

  displayPercentage(attendancePercentageResult);
  displayHoursNeeded(needHoursResult);
  displayBunkableHours(bunkableHoursResult);
}
