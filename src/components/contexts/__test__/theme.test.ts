import React from 'react';
import { render, act } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from '../ThemeContext';

// Mocking localStorage
const mockSetItem = jest.fn();
const mockGetItem = jest.fn();
global.localStorage.__proto__.setItem = mockSetItem;
global.localStorage.__proto__.getItem = mockGetItem;

describe('ThemeProvider', () => {

  it('should set initial theme from localStorage', () => {
    mockGetItem.mockReturnValueOnce('true');

    let contextValue;
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => {
            contextValue = value;
          }}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    expect(contextValue[0].isDark).toBe(true);
  });

  it('should toggle theme', () => {
    let contextValue;
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => {
            contextValue = value;
          }}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    act(() => {
      contextValue[1](); // call toggleTheme
    });

    expect(mockSetItem).toHaveBeenCalledWith('isDark', 'true');
    expect(contextValue[0].isDark).toBe(true);
  });
});