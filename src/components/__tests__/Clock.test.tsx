import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageContext } from '../contexts/languageContext';
import Clock from '../Clock';

describe('Clock', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('displays the current time in 12-hour format in English', () => {
    jest.setSystemTime(new Date('2022-01-01T10:15:30'));

    render(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );

    expect(screen.getByText('10:15')).toBeInTheDocument();
    expect(screen.getByText('AM')).toBeInTheDocument();
  });

  it('displays the current time in 12-hour format in Arabic', () => {
    jest.setSystemTime(new Date('2022-01-01T10:15:30'));

    render(
      <LanguageContext.Provider value={{ language: 'ar', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );

    expect(screen.getByText('10:15')).toBeInTheDocument();
    expect(screen.getByText('صباحاً')).toBeInTheDocument();
  });

  it('displays seconds with leading zero', () => {
    jest.setSystemTime(new Date('2022-01-01T10:15:05Z'));

    render(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );

    expect(screen.getByText(':05')).toBeInTheDocument();
  });

  it('displays AM/PM in English based on context', () => {
    jest.setSystemTime(new Date('2022-01-01T05:15:05Z'));
    render(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );
    expect(screen.getByText('AM')).toBeInTheDocument();

    jest.setSystemTime(new Date('2022-01-01T15:15:05Z'));
    render(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );
    expect(screen.getByText('PM')).toBeInTheDocument();
  });

  it('displays AM/PM in Arabic based on context', () => {
    jest.setSystemTime(new Date('2022-01-01T05:15:05Z'));
    render(
      <LanguageContext.Provider value={{ language: 'ar', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );
    expect(screen.getByText('صباحاً')).toBeInTheDocument();

    jest.setSystemTime(new Date('2022-01-01T15:15:05Z'));
    render(
      <LanguageContext.Provider value={{ language: 'ar', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );
    expect(screen.getByText('مساءً')).toBeInTheDocument();
  });

  it('applies row-reverse style for Arabic language', () => {
    jest.setSystemTime(new Date('2022-01-01T10:15:30'));

    const { container } = render(
      <LanguageContext.Provider value={{ language: 'ar', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );

    expect(container.firstChild).toHaveStyle('flex-direction: row-reverse');
  });

  it('applies row style for English language', () => {
    jest.setSystemTime(new Date('2022-01-01T10:15:30'));

    const { container } = render(
      <LanguageContext.Provider value={{ language: 'en', setLanguage: jest.fn() }}>
        <Clock />
      </LanguageContext.Provider>
    );

    expect(container.firstChild).toHaveStyle('flex-direction: row');
  });

  it('throws an error if used outside LanguageProvider', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress error output

    expect(() => render(<Clock />)).toThrow('Clock must be used within a LanguageProvider');

    (console.error as jest.Mock).mockRestore(); // Restore console.error
  });
});
