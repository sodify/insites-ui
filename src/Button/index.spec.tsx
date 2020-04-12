import React from 'react'
import { render } from '@testing-library/react'
import Button from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Box component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Submit</Button>
      </ThemeProvider>
    )
    expect(getByText('Submit')).toBeTruthy()
  })

  it('renders with variant', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Submit</Button>
      </ThemeProvider>
    )
    expect(getByText('Submit')).toBeTruthy()
  })

  it('renders with size variant', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button size="small">Submit</Button>
      </ThemeProvider>
    )
    expect(getByText('Submit')).toBeTruthy()
  })
})
