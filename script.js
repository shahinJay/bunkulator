//static functions
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

    while (finalPercentage <= minCriteria && (totalHoursTaken + hoursNeeded) < totalHours) {
        hoursNeeded += 1;
        finalPercentage = (100 * (totalHoursAttended + hoursNeeded)) / (totalHoursTaken + hoursNeeded);
        console.log(hoursNeeded, finalPercentage);
    }
    return hoursNeeded;
}

//dynamic functions
function calculate() {
  let selectionValue = document.getElementById("totalVsLeft").value

  let totalHoursTaken = Number(document.getElementById("totalHoursTaken").value);
  let totalHoursAttended = Number(document.getElementById("totalHoursAttended").value);
  let attendancePercentageResult = String(attendancePercentage(totalHoursTaken, totalHoursAttended));
  let needHoursResult = 0


  if (selectionValue == "totalKnown") {
      var totalHours = Number(document.getElementById("knownValue").value);
      var hoursLeft = totalHours-totalHoursTaken
  }
  else if (selectionValue == "leftKnown") {
      var hoursLeft = Number(document.getElementById("knownValue").value);
      var totalHours = hoursLeft + totalHoursTaken
  }


  let bunkableHoursResult = String(bunkableHours(totalHours, totalHoursTaken, totalHoursAttended));


  if (Number(attendancePercentageResult) < minCriteria) {
    needHoursResult = needHours(totalHours, totalHoursTaken,totalHoursAttended);
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

  document.getElementById("displayP").textContent = Number(attendancePercentageResult).toFixed(2) + " %";

  if(Number(bunkableHoursResult) > 0){
    document.getElementById("displayHB").textContent = Math.floor(Number(bunkableHoursResult));
  }
  else{
    document.getElementById("displayHB").textContent = "Don't even think about it :P";
  }
}

var minCriteria = 75