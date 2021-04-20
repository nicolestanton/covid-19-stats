export function convertCovidDataToLineChartFormat(data, numberOfDays) {
    if (!Array.isArray(data)) {
        return [];
    }

    const copiedData = numberOfDays ? [...data].slice(0, numberOfDays) : [...data];
    const latestData = data.slice(-1).pop()


    const formattedData = copiedData.map((item) => ({
        Name: item.Country,
        Confirmed: item.Confirmed,
        Deaths: item.Deaths,
        Recovered: item.Recovered,
    }));

    console.log('this data', formattedData)

    return formattedData;
}