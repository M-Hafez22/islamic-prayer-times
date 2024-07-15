import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FetchedDataContext } from '../../contexts/FetchedDataContext';
import TimeZone from '../TimeZone';

afterEach(cleanup);

describe('Show Time Zone', () => {
    it('renders the timezone when data is loaded', () => {
        const mockData = {
            meta: {
                timezone: 'Africa/Cairo',
                method: {
                    name: "Egyptian General Authority of Survey"
                }
            }
        };

        const { getByText } = render(
            <FetchedDataContext.Provider value={[true, mockData]}>
                <TimeZone />
            </FetchedDataContext.Provider>
        );

        expect(getByText('Africa/Cairo - Egyptian General Authority of Survey')).toBeInTheDocument();
    });
});