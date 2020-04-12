import React from 'react'
import { render } from '@testing-library/react'
import Textarea from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Textarea component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Textarea placeholder="Message" />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Message')).toBeTruthy()
  })

  it('renders with error', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Textarea placeholder="Message" hasError />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Message')).toBeTruthy()
  })
})
