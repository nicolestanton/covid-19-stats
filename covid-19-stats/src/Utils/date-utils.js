// Converts DD-MM-YYYY into a human readable date format.
export function readableDateFormat(date) {
    const dateObject = new Date(date);
    return dateObject.toDateString();
}

//changes 'Mon 16 Apr 2021' into '2021-04-16
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
