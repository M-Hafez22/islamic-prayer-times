import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import RemainTime from '../RemainTime'


describe('RemainTime', () => {
  it('renders correctly with given props', () => {
    render(<RemainTime text="Next prayer:" prayer="Fajr" time="05:00 AM" />);

    expect(screen.getByText('Next prayer: Fajr')).toBeInTheDocument();
    expect(screen.getByText('05:00 AM')).toBeInTheDocument();
  });

  it('renders correctly with different props', () => {
    render(<RemainTime text="Upcoming prayer:" prayer="Dhuhr" time="12:00 PM" />);

    expect(screen.getByText('Upcoming prayer: Dhuhr')).toBeInTheDocument();
    expect(screen.getByText('12:00 PM')).toBeInTheDocument();
  });

  it('renders time in remainTime class span', () => {
    render(<RemainTime text="Next prayer:" prayer="Asr" time="03:00 PM" />);

    expect(screen.getByText('03:00 PM')).toHaveClass('remainTime');
  });
});
