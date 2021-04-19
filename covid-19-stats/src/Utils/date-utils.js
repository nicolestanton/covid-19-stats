// Converts DD-MM-YYYY into a human readable date format.
export function readableDateFormat(date) {
    const dateObject = new Date(date);
    return dateObject.toDateString();
}

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// console.log(formatDate('Sun May 11,2014'));