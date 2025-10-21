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

function needHours(totalHours, totalHoursTaken,totalHoursAttended) {
    let finalPercentage = 0
    let hoursNeeded = 0

    while (finalPercentage <= 75 && (totalHoursTaken + hoursNeeded) < totalHours) {
        hoursNeeded += 1;
        finalPercentage = (100 * (totalHoursAttended + hoursNeeded)) / (totalHoursTaken + hoursNeeded);
        console.log(hoursNeeded, finalPercentage);
    }
    return hoursNeeded
}

function calculate() {
    
  let totalHours = Number(document.getElementById("totalHours").value);
  let totalHoursTaken = Number(document.getElementById("totalHoursTaken").value);
  let totalHoursAttended = Number(document.getElementById("totalHoursAttended").value);


  let bunkableHoursResult = String(bunkableHours(totalHours, totalHoursTaken, totalHoursAttended));
  let attendancePercentageResult = String(attendancePercentage(totalHoursTaken, totalHoursAttended));

  let needHoursResult = 0

  let hoursLeft = totalHours-totalHoursTaken

  if (Number(attendancePercentageResult) < 75) {
    needHoursResult = String(needHours(totalHours, totalHoursTaken,totalHoursAttended));
    if (needHoursResult < hoursLeft){
        
        document.getElementById("displayHN").textContent = needHoursResult;
    }
    else{
        document.getElementById("displayHN").textContent = "You're cooked bro :( ";
    }
  }
  else{
    document.getElementById("displayHN").textContent = "You're all set dude :) "
  }

  document.getElementById("displayP").textContent = attendancePercentageResult + " %";

  if(bunkableHoursResult > 0){
    document.getElementById("displayHB").textContent = bunkableHoursResult;
  }
  else{
    document.getElementById("displayHB").textContent = "Don't even think about it :P";
  }
}
