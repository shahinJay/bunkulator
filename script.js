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