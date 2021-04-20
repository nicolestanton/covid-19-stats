export function convertCovidDataToLineChartFormat(data, numberOfDays) {
    if (!Array.isArray(data)) {
        return [];
    }

    const copiedData = numberOfDays ? [...data].slice(0, numberOfDays) : [...data];

    const formattedData = copiedData.map((item) => ({
        Name: item.Country,
        TotalConfirmed: item.Confirmed,
        TotalDeaths: item.Deaths,
        TotalRecovered: item.Recovered,
    }));

    console.log('this data', formattedData)

    // const formattedData = {
    //         TotalConfirmed: 57793
    // TotalDeaths: 2539
    // TotalRecovered: 52168
    //     name: item.date,
    //     newCases: item.newCases,
    //     newAdmissions: item.newAdmissions,
    //     newDeaths: item.newDeaths
    // };

    return formattedData;
}