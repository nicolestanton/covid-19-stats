//Added parameters in an object so can use only the needed ones if needed to use again
export function getApiUrl({ country, chosenDate, region = 'region' }) {

    // keep this `https://api.covid19api.com/summary`
    return `https://api.covid19api.com/total/country/${country}`
    // return `https://api.covid19api.com/total/country/${country}/status/confirmed?from=2021-04-18T00:00:00Z&to=2021-04-19T00:00:00Z`


}