export function convertCovidDataToLineChartFormat(data, numberOfDays) {
    if (!Array.isArray(data)) {
        return [];
    }

    const copiedData = numberOfDays ? [...data].slice(0, numberOfDays) : [...data];

    const formattedData = copiedData.map((item) => ({
        name: item.date,
        newCases: item.newCases,
        newAdmissions: item.newAdmissions,
        newDeaths: item.newDeaths
    }));

    return formattedData;
}