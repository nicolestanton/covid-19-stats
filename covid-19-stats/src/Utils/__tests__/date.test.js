import { readableDateFormat, formatDate } from '../date-utils';

describe('tests for readableDateFormat function', () => {
    it('Should return a given date in a readable format for the user', () => {
        const formattedDate = 'Mon Apr 19 2021'
        const todaysDate = 'Mon Apr 19 2021 13:37:51 GMT+0100 (British Summer Time)'
        const result = readableDateFormat(todaysDate);
        expect(result).toEqual(formattedDate);
    });
})


describe('tests for formatDate function', () => {
    it('Should return a date in the format of YYYY-MM-DD', () => {
        const formattedDate = '2021-04-19'
        const todaysDate = new Date()
        const result = formatDate(todaysDate);
        expect(result).toEqual(formattedDate);
    });
})

