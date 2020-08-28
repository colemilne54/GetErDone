function getCurrentDate() {
    let date = new Date();

    let months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "June",
        "July",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec."
    ]

    let month = months[date.getMonth()];
    let day = addOrdinalIndicator(date.getDate());

    function addOrdinalIndicator(day) {
        switch (day) {
            case 1:
            case 21:
            case 31:
                day = day + "st";
                return day;
            case 2:
            case 22:
                day = day + "nd";
                return day;
            case 3:
            case 23:
                day = day + "rd";
                return day;
            default: day = day + "th";
            return day;
        }
    }

    fullDate = `${month} ${day}`;
    return fullDate;
}
