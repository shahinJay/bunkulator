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