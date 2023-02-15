import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './components/contexts/theme'
import { to12Format, addLeadingZero } from './components/helper/formatTime'

import App from './App';
describe('Render Clock', () => {
  let date = new Date();

  beforeEach(() => {
    render(<ThemeProvider><App /></ThemeProvider>);
  })
  test('renders Hour:Minute in 12 format', () => {
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;
    // const clock = getByText(to12Format(currentTime));
    expect(screen.getByText(to12Format(currentTime))).toBeInTheDocument();
  });
  it('Renders Second', () => {
    let date = new Date();
    // const seconds = getByText(`:${addLeadingZero(date.getSeconds())}`)
    expect(screen.getByText(`:${addLeadingZero(date.getSeconds())}`)).toBeInTheDocument();
  })
  it("render AM or PM", () => {
    // const dayOrNight = getByText(date.getHours() < 12 ? "AM" : "PM")
    expect(screen.getByText(date.getHours() < 12 ? "AM" : "PM")).toBeInTheDocument();
  })
})

describe('Renders the Footer', () => {
  beforeEach(() => {
    render(<ThemeProvider><App /></ThemeProvider>);
  })
  it('Render "⚙️"', () => {
    expect(screen.getByText(/⚙️/i)).toBeInTheDocument()
  })

})
