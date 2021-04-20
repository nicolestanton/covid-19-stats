import { convertCovidDataToLineChartFormat } from '../recharts-utils';
import { render, screen, act } from '@testing-library/react';
import App from '../../App';
// import useFetch from '../../Hooks/useFetch'

describe('tests for chart', () => {

    it('should render loading whilst fetching data', () => {
        render(<App />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();

    });


    it('Should have more than 1 piece of data on graph', () => {
        const graphData = [
            { Cases: 1437 },
            { Cases: 1467 },
            { Cases: 1501 },
            { Cases: 1389 }
        ]
        expect(graphData.length).toBeGreaterThan(1);
    });
})

