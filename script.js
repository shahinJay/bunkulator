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

function needHours(totalHoursTaken,totalHoursAttended) {
    let finalPercentage = 0
    let hoursNeeded = 0
    alert(finalPercentage)
    console.log(finalPercentage)
    while (finalPercentage <= 75)
    {
        console.log(finalPercentage)
        hoursNeeded += 100;
        let numerator = 100*(totalHoursAttended+hoursNeeded);
        let denominator = totalHoursTaken+hoursNeeded;
        finalPercentage = numerator/denominator;

        if (finalPercentage>80)
        {
            alert(finalPercentage)
            break;
        }
    }
    alert("son of a b")
    return hoursNeeded
}

function calculate() {
    
  let totalHours = document.getElementById("totalHours").value;
  let totalHoursTaken = document.getElementById("totalHoursTaken").value;
  let totalHoursAttended = document.getElementById("totalHoursAttended").value;


  let bunkableHoursResult = String(bunkableHours(totalHours, totalHoursTaken, totalHoursAttended));
  let attendancePercentageResult = String(attendancePercentage(totalHoursTaken, totalHoursAttended));

  let needHoursResult = 0

  if (attendancePercentageResult < 75) {
    needHoursResult = String(needHours(totalHoursTaken,totalHoursAttended));
  }
  else{
    needHoursResult = "NUH UH";
  }

    
  document.getElementById("displayP").textContent = attendancePercentageResult;
  document.getElementById("displayHN").textContent = needHoursResult;
  document.getElementById("displayHB").textContent = bunkableHoursResult;
}
