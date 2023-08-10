import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FetchedDataContext } from './contexts/FetchedDataContext';
import { LanguageContext } from './contexts/languageContext';
import HijriDate from './HijriDate';

afterEach(cleanup);

const mockData = {
    date: {
        gregorian: {
            weekday: {
                en: 'Monday',
            },
        },
        hijri: {
            day: '1',
            month: {
                en: 'Muharram',
                ar: 'محرم',
            },
            year: '1443',
            weekday: {
                ar: 'الاثنين',
            },
        },
    },
};
describe('Renders Hijri Date', () => {
    it('Renders Hijri date in English correctly', () => {
        const { getByText } = render(
            <FetchedDataContext.Provider value={[true, mockData]}>
                <LanguageContext.Provider value={['en']}>
                    <HijriDate />
                </LanguageContext.Provider>
            </FetchedDataContext.Provider>
        );

        expect(getByText('Monday 1 Muharram 1443')).toBeInTheDocument();
    });

    it('Renders Hijri date in Arabic correctly', () => {
        const { getByText } = render(
            <FetchedDataContext.Provider value={[true, mockData]}>
                <LanguageContext.Provider value={['ar']}>
                    <HijriDate />
                </LanguageContext.Provider>
            </FetchedDataContext.Provider>
        );

        expect(getByText('الاثنين 1 محرم 1443')).toBeInTheDocument();
    });
});