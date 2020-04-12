import React from 'react'
import { render } from '@testing-library/react'
import Input from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ReactComponent as HelpIcon } from './help.svg'

describe('Input component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('renders with tooltip', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input
          placeholder="Bryan Fury"
          tooltip="Perpetual power generator?... Incredible."
        />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('renders with icon', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input
          placeholder="Bryan Fury"
          IconComponent={HelpIcon}
        />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('renders with error', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input
          placeholder="Bryan Fury"
          hasError
        />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })
})
