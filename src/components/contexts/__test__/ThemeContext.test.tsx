// ThemeProvider.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, ThemeContext } from '../ThemeContext';

const TestComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useContext must be used within a ThemeProvider');
  }

  const { isDark, toggleTheme } = themeContext;

  return (
    <div>
      <span data-testid="theme">{isDark ? 'Dark' : 'Light'}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('initializes theme from localStorage', () => {
    localStorage.setItem('isDark', 'true');
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('Dark');
  });

  test('initializes with default theme when localStorage is empty', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('Light');
  });

  test('toggles theme correctly', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('Light');
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('theme')).toHaveTextContent('Dark');
    expect(localStorage.getItem('isDark')).toBe('true');
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('theme')).toHaveTextContent('Light');
    expect(localStorage.getItem('isDark')).toBe('false');
  });
});
