import React from 'react'
import { render } from '@testing-library/react'
import Heading from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Heading component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Header</Heading>
      </ThemeProvider>
    )
    expect(getByText('Header')).toBeTruthy()
  })

  it('renders with size variant', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading as="h2" size="l">Variants header</Heading>
      </ThemeProvider>
    )
    expect(getByText('Variants header')).toBeTruthy()
  })
})
