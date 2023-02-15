import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { ThemeProvider } from './components/contexts/theme';
import { addLeadingZero, to12Format } from './components/helper/formatTime';

describe('Testing App', () => {
  beforeEach(() => {
    render(<ThemeProvider><App /></ThemeProvider>);
  })

  describe('Render Clock', () => {
    let date = new Date();
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
    it('Render "⚙️"', () => {
      expect(screen.getByText(/⚙️/i)).toBeInTheDocument()
    })
  })

})