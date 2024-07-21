import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { FetchedDataContext, FetchedDataProvider } from '../contexts/FetchedDataContext';
import { LanguageContext, LanguageProvider } from '../contexts/languageContext';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import Footer from '../Footer';


// Helper function to render the Footer outside of a ThemeProvider
const renderFooterWithoutThemeProvider = () => {
    render(
        <LanguageProvider>
            <FetchedDataProvider>
                <Footer />
            </FetchedDataProvider>
        </LanguageProvider>
    );
};



describe('Footer', () => {
    describe('Renders Footer Buttons', () => {

        beforeEach(() => {
            render(
                <ThemeProvider>
                    <LanguageProvider>
                        <FetchedDataProvider>
                            <Footer />
                        </FetchedDataProvider>
                    </LanguageProvider>
                </ThemeProvider>
            );
        })
    
        it('Render "⚙️"', () => {
            expect(screen.getByRole('button', { name: '⚙️' })).toBeInTheDocument();
        });
        
        it('Render Setting button', () => {
            expect(screen.getAllByRole('radio').length).toBe(4);
            expect(screen.getByTestId(/dark/i)).toBeInTheDocument();
            expect(screen.getByTestId(/light/i)).toBeInTheDocument();
            expect(screen.getByTestId(/english/i)).toBeInTheDocument();
            expect(screen.getByTestId(/عربى/i)).toBeInTheDocument();
        });

        it('Open And Close Setting panel', () => {
            const settingsButton = screen.getByRole('button', { name: '⚙️' });
            expect(screen.getByTestId('setting').classList).toContain('hideSettings');
            fireEvent.click(settingsButton);
            expect(screen.getByTestId('setting').classList).toContain('showSettings');
            fireEvent.click(settingsButton);
            expect(screen.getByTestId('setting').classList).toContain('hideSettings');
        });
    });
    
    it('Renders with light theme', () => {
        const { getByTestId } = render(
            <LanguageContext.Provider value={{ language: "ar", setLanguage: () => {} }}>
                <FetchedDataContext.Provider value={{
                    loaded: true,
                    data: { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' }, meta: { timezone: 'Africa/Cairo', method: { name: "Egyptian General Authority of Survey" } } }
                }}>
                    <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>
                        <Footer />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );
        expect(getByTestId('footer').className).toBe('footerLight');
    });
    
    it('Renders with Dark theme', () => {
        const { getByTestId } = render(
            <LanguageContext.Provider value={{ language: "ar", setLanguage: () => {} }}>
                <FetchedDataContext.Provider value={{
                    loaded: true,
                    data: { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' }, meta: { timezone: 'Africa/Cairo', method: { name: "Egyptian General Authority of Survey" } } }
                }}>
                    <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
                        <Footer />
                    </ThemeContext.Provider>
                </FetchedDataContext.Provider>
            </LanguageContext.Provider>
        );
        expect(getByTestId('footer').className).toBe('footerDark');
    });
    it('Throws error if ThemeContext is not provided', () => {
        expect(() => {
            renderFooterWithoutThemeProvider();
        }).toThrow('useContext must be used within a ThemeProvider');
    });
});
