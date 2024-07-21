import RadioButton from '../RadioButton';
import { ThemeContext } from '../../contexts/ThemeContext';
import { render, screen, fireEvent } from '@testing-library/react';

describe('RadioButton', () => {
  const renderWithTheme = (isDark: boolean, props: any) => {
    return render(
      <ThemeContext.Provider value={{ isDark, toggleTheme: () => {} }}>
        <RadioButton {...props} />
      </ThemeContext.Provider>
    );
  };

  it('renders with light theme by default', () => {
    renderWithTheme(false, {
      label: 'TestRadio',
      value: 'testValue',
      onChange: jest.fn(),
      checked: false,
    });

    const radioButton = screen.getByTestId('TestRadio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveClass('light');
  });

  it('renders with dark theme when isDark is true', () => {
    renderWithTheme(true, {
      label: 'TestRadio',
      value: 'testValue',
      onChange: jest.fn(),
      checked: false,
    });

    const radioButton = screen.getByTestId('TestRadio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveClass('dark');
  });

  it('triggers onChange event when clicked', () => {
    const handleChange = jest.fn();

    renderWithTheme(false, {
      label: 'TestRadio',
      value: 'testValue',
      onChange: handleChange,
      checked: false,
    });

    const radioButton = screen.getByTestId('TestRadio');
    fireEvent.click(radioButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('throws an error if used outside ThemeProvider', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress error output

    expect(() =>
      render(
        <RadioButton
          label="TestRadio"
          value="testValue"
          onChange={jest.fn()}
          checked={false}
        />
      )
    ).toThrow('useContext must be used within a ThemeProvider');

    (console.error as jest.Mock).mockRestore(); // Restore console.error
  });
});