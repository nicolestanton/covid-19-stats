import { getApiUrl } from '../api-utils';

//pass in a location and a date and result data should be ...
describe('tests for getApiUrl function', () => {
    it('Should return a valid url with correct params passed in', () => {
        const options = { 'country': 'Cuba', 'isoStartDate': '2021-04-16T22:04:40.050Z' }
        const url = getApiUrl(options);
        const result = `https://api.covid19api.com/total/country/${options.country}/status/confirmed?from=${options.isoStartDate}&to=2021-04-19T00:00:00Z`;;

        expect(url).toEqual(result);
    });
})

