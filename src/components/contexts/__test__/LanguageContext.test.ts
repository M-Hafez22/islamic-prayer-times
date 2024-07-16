import React from 'react';
import { render, act } from '@testing-library/react';
import { LanguageProvider, LanguageContext } from '../languageContext';

describe('LanguageContext', () => {
  it('provides initial language state', () => {
    let testLanguage;
    render(
      <LanguageProvider>
        <LanguageContext.Consumer>
          {([language]) => {
            testLanguage = language;
            return null;
          }}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
    expect(testLanguage).toBe('en');
  });

  it('reads language from local storage', () => {
    localStorage.setItem('language', 'ar');
    let testLanguage;
    act(() => {
      render(
        <LanguageProvider>
          <LanguageContext.Consumer>
            {([language]) => {
              testLanguage = language;
              return null;
            }}
          </LanguageContext.Consumer>
        </LanguageProvider>
      );
    });
    expect(testLanguage).toBe('ar');
  });
});