import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RemainTime from '../RemainTime'

describe('RemainTime', () => {
  it('renders the component with correct text and prayer', () => {
    render(<RemainTime text="Time until" prayer="Fajr" time="02:30" />)
    
    expect(screen.getByText('Time until Fajr')).toBeInTheDocument()
  })

  it('displays the correct remaining time', () => {
    render(<RemainTime text="Remaining time for" prayer="Dhuhr" time="01:45" />)
    
    expect(screen.getByText('01:45')).toHaveClass('remainTime')
  })

  it('handles empty strings correctly', () => {
    render(<RemainTime text="" prayer="" time="" />)
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('')
    expect(screen.getByText('')).toHaveClass('remainTime')
  })

  it('renders with long text and prayer names', () => {
    render(<RemainTime text="Time remaining until the next prayer" prayer="Maghrib Al-Shams" time="03:59:59" />)
    
    expect(screen.getByText('Time remaining until the next prayer Maghrib Al-Shams')).toBeInTheDocument()
    expect(screen.getByText('03:59:59')).toHaveClass('remainTime')
  })
})
