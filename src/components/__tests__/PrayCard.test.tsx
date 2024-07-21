import { render, screen } from '@testing-library/react';
import React from 'react';
import { FetchedDataProvider } from '../contexts/FetchedDataContext';
import { LanguageProvider } from '../contexts/languageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import PrayCard from '../PrayCard';

describe('Renders the Footer', () => {
    beforeEach(() => {
        render(
            <ThemeProvider><LanguageProvider><FetchedDataProvider>
                <PrayCard name={'Dhuhr'} time={"13:02"} active="false" />
            </FetchedDataProvider></LanguageProvider></ThemeProvider>
        );
    })
    it('Renders the prayer Name', () => {
        expect(screen.getByText('Dhuhr')).toBeInTheDocument()
    })
    it('Renders the prayer Time in 12 format', () => {
        expect(screen.getByText('01:02')).toBeInTheDocument()
    })
})