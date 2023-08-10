import { render, fireEvent, screen } from '@testing-library/react';
import { LanguageProvider } from '../contexts/languageContext';
import LanguageToggle from './LanguageToggle';
import { ThemeProvider } from '../contexts/theme';
import React from 'react';
import { FetchedDataProvider } from '../contexts/FetchedDataContext';

describe('Change App Language', () => {

    beforeEach(() => {
        localStorage.clear();

        render(
            <ThemeProvider><LanguageProvider><FetchedDataProvider>
                <LanguageToggle />
            </FetchedDataProvider></LanguageProvider></ThemeProvider>
        );
    });

    it('Render two radio buttons (english, Arabic )', () => {
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons.length).toBe(2);
    });

    it('change language to Arabic when Arabic radio button is clicked', () => {
        fireEvent.click(screen.getByTestId('عربى'));
        // expect(setLanguage).toHaveBeenCalledWith('ar');
        // expect(screen.getByText('المغرب')).toBeInTheDocument();
        expect(localStorage.getItem('language')).toBe('ar');
    });

    it('change language to English when English radio button is clicked', () => {
        fireEvent.click(screen.getByTestId('عربى'));
        fireEvent.click(screen.getByTestId('english'));
        // expect(setLanguage).toHaveBeenCalledWith('en');
        expect(localStorage.getItem('language')).toBe('en');
    });
});


