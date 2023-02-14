import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from './components/contexts/theme'
import { to12Format, addLeadingZero } from './components/helper/formatTime'

import App from './App';
describe('Render Clock', () => {
  test('renders Hour:Minute in 12 format', () => {
    const { getByText } = render(<ThemeProvider><App /></ThemeProvider>);
    let date = new Date();
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;
    const clock = getByText(to12Format(currentTime));
    expect(clock).toBeInTheDocument();
  });
  it('Renders Second', () => {
    const { getByText } = render(<ThemeProvider><App /></ThemeProvider>);
    let date = new Date();
    const seconds = getByText(`:${addLeadingZero(date.getSeconds())}`)
    expect(seconds).toBeInTheDocument();
  })
  it("render AM or PM", () => {
    const { getByText } = render(<ThemeProvider><App /></ThemeProvider>);
    let date = new Date();
    const dayOrNight = getByText(date.getHours() < 12 ? "AM" : "PM")
    expect(dayOrNight).toBeInTheDocument();
  })
})