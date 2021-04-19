import { getApiUrl } from '../api-utils';


//pass in a location and a date and result data should be ...
describe('tests for getApiUrl function', () => {
    it('Should return a valid url with correct params passed in', () => {
        const options = { location: 'Liverpool', chosenDate: '2021-04-19' }
        const url = getApiUrl(options);
        const result = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${options.location}&structure={"date":"${options.chosenDate}","newCases":"newCasesByPublishDate","newDeaths":"newDeathsByDeathDate", "newAdmissions":"newAdmissions", "totalCases":"cumCasesByPublishDate"}`;;
        expect(url).toEqual(result);
    });
})

