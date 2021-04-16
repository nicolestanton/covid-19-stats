// Converts DD-MM-YYYY into a human readable date format.
export function readableDateFormat(date) {
    const dateObject = new Date(date);
    return dateObject.toDateString();
}