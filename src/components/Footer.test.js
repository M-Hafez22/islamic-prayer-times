import { render, screen } from '@testing-library/react';
import React from 'react';
import { FetchedDataProvider } from './contexts/FetchedDataContext';
import { LanguageProvider } from './contexts/languageContext';
import { ThemeProvider } from './contexts/theme';
import Footer from './Footer';

describe('Renders the Footer', () => {
    beforeEach(() => {
        render(
            <ThemeProvider><LanguageProvider><FetchedDataProvider>
                <Footer />
            </FetchedDataProvider></LanguageProvider></ThemeProvider>
        );
    })

    it('Render "⚙️"', () => {
        expect(screen.getByRole('button', { name: '⚙️' })).toBeInTheDocument()
    })
    it('Render Setting button', () => {
        expect(screen.getAllByRole('radio').length).toBe(4)
        expect(screen.getByTestId(/dark/i)).toBeInTheDocument()
        expect(screen.getByTestId(/light/i)).toBeInTheDocument()
        expect(screen.getByTestId(/english/i)).toBeInTheDocument()
        expect(screen.getByTestId(/عربى/i)).toBeInTheDocument()
    })
})