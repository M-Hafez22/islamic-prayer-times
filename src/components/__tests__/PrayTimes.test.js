import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PrayTimes from '../PrayTimes';
import { LanguageContext } from '../contexts/languageContext';
import { FetchedDataContext } from '../contexts/FetchedDataContext';
import { ThemeContext } from '../contexts/theme';

afterEach(cleanup);

describe('PrayTimes', () => {
    it('Renders Prayer Times in the English language', () => {
        const { getByText } = render(
            <LanguageContext.Provider value={["en"]}>
                <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' } }]}>
                    <ThemeContext.Provider value={[{ isDark: false }]}>
                        <PrayTimes />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );

        expect(getByText('Fajr')).toBeInTheDocument();
        expect(getByText('05:00')).toBeInTheDocument();
        expect(getByText('Dhuhr')).toBeInTheDocument();
        expect(getByText('12:00')).toBeInTheDocument();
        expect(getByText('Asr')).toBeInTheDocument();
        expect(getByText('03:00')).toBeInTheDocument();
        expect(getByText('Maghrib')).toBeInTheDocument();
        expect(getByText('06:00')).toBeInTheDocument();
        expect(getByText('Isha')).toBeInTheDocument();
        expect(getByText('08:00')).toBeInTheDocument();
    });

    it('Renders Prayer Times in the Arabic language', () => {
        const { getByText } = render(
            <LanguageContext.Provider value={["ar"]}>
                <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' } }]}>
                    <ThemeContext.Provider value={[{ isDark: false }]}>
                        <PrayTimes />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );
        expect(getByText('الفجر')).toBeInTheDocument();
        expect(getByText('05:00')).toBeInTheDocument();
        expect(getByText('الظهر')).toBeInTheDocument();
        expect(getByText('12:00')).toBeInTheDocument();
        expect(getByText('العصر')).toBeInTheDocument();
        expect(getByText('03:00')).toBeInTheDocument();
        expect(getByText('المغرب')).toBeInTheDocument();
        expect(getByText('06:00')).toBeInTheDocument();
        expect(getByText('العشاء')).toBeInTheDocument();
        expect(getByText('08:00')).toBeInTheDocument();

    });
    
    it('Renders with light theme', () => {
        const { getByTestId } = render(
            <LanguageContext.Provider value={["ar"]}>
                <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' } }]}>
                    <ThemeContext.Provider value={[{ isDark: false }]}>
                        <PrayTimes />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );
        expect(getByTestId('prayTime').classList).toContain('prayTimeLight')
    });
    it('Renders with Dark theme', () => {
        const { getByTestId } = render(
            <LanguageContext.Provider value={["ar"]}>
                <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' } }]}>
                    <ThemeContext.Provider value={[{ isDark: true }]}>
                        <PrayTimes />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );
        expect(getByTestId('prayTime').classList).toContain('prayTimeDark')
    });
});