import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageProvider, LanguageContext } from '../languageContext';

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('LanguageProvider', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('sets the initial language from localStorage', () => {
    localStorageMock.setItem('language', 'en');

    render(
      <LanguageProvider>
        <LanguageContext.Consumer>
          {({ language }) => <div>{language}</div>}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );

    expect(screen.getByText('en')).toBeInTheDocument();
  });

  it('updates localStorage when the language state changes', () => {
    render(
      <LanguageProvider>
        <LanguageContext.Consumer>
          {({ language, setLanguage }) => (
            <>
              <div>{language}</div>
              <button onClick={() => setLanguage('fr')}>Change Language</button>
            </>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );

    act(() => {
      screen.getByText('Change Language').click();
    });

    expect(screen.getByText('fr')).toBeInTheDocument();
    expect(localStorageMock.getItem('language')).toBe('fr');
  });

  it('provides the correct context values', () => {
    render(
      <LanguageProvider>
        <LanguageContext.Consumer>
          {({ language, setLanguage }) => (
            <>
              <div>{`Language: ${language}`}</div>
              <button onClick={() => setLanguage('es')}>Set Spanish</button>
            </>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );

    expect(screen.getByText('Language:')).toBeInTheDocument();

    act(() => {
      screen.getByText('Set Spanish').click();
    });

    expect(screen.getByText('Language: es')).toBeInTheDocument();
    expect(localStorageMock.getItem('language')).toBe('es');
  });
});
