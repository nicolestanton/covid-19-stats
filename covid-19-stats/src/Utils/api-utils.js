//Added parameters in an object so can use only the needed ones if needed to use again
export function getApiUrl({ location, chosenDate }) {
    return `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location}&structure={"date":"${chosenDate}","newCases":"newCasesByPublishDate","newDeaths":"newDeathsByDeathDate", "newAdmissions":"newAdmissions", "totalCases":"cumCasesByPublishDate"}`;
}