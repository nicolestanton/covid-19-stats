export function getApiUrl(location, chosenDate) {
    return `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCases":"newCasesByPublishDate","newDeaths":"newDeathsByDeathDate", "newAdmissions":"newAdmissions", "totalCases":"cumCasesByPublishDate"}`;
}

// export function getApiUrl(location, chosenDate) {
//     return `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location};date=${chosenDate}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCases":"newCasesByPublishDate","newDeaths":"newDeathsByDeathDate", "newAdmissions":"newAdmissions", "totalCases":"cumCasesByPublishDate"}`;
// }