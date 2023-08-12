import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from '../RadioButton';
import { ThemeContext } from '../../contexts/theme';

describe('Renders Radio Button', () => {
    const mockOnChange = jest.fn();

    it('renders Radio Button correctly with light theme', () => {
        const { getByTestId } = render(
            <ThemeContext.Provider value={[{ isDark: false }]}>
                <RadioButton label="test" value="testValue" onChange={mockOnChange} checked={false} />
            </ThemeContext.Provider>
        );

        const radioButton = getByTestId('test');
        expect(radioButton).toBeInTheDocument();
        expect(radioButton).toHaveClass('light');
    });

    it('renders Radio Button correctly with dark theme', () => {
        const { getByTestId } = render(
            <ThemeContext.Provider value={[{ isDark: true }]}>
                <RadioButton label="test" value="testValue" onChange={mockOnChange} checked={false} />
            </ThemeContext.Provider>
        );

        const radioButton = getByTestId('test');
        expect(radioButton).toBeInTheDocument();
        expect(radioButton).toHaveClass('dark');
    });

    it('calls onChange when clicked', () => {
        const { getByTestId } = render(
            <ThemeContext.Provider value={[{ isDark: false }]}>
                <RadioButton label="test" value="testValue" onChange={mockOnChange} checked={false} />
            </ThemeContext.Provider>
        );

        const radioButton = getByTestId('test');
        fireEvent.click(radioButton);
        expect(mockOnChange).toHaveBeenCalled();
    });
});