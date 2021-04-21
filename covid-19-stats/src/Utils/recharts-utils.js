//need to add comments here

export function convertCovidDataToLineChartFormat(data, numberOfDays) {
    if (!Array.isArray(data)) {
        return [];
    }

    const copiedData = numberOfDays ? [...data].slice(0, numberOfDays) : [...data];

    const formattedData = copiedData.map((item) => ({
        Cases: item.Cases,
    }));


    return formattedData;
}