//Added parameters in an object so can use only the needed ones if needed to use again
export function getApiUrl({ country, isoStartDate }) {

    return `https://api.covid19api.com/total/country/${country}/status/confirmed?from=${isoStartDate}&to=2021-04-19T00:00:00Z`

}