import React, { useRef } from 'react'
import { render } from '@testing-library/react'
import Input from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import { ReactComponent as PhoneIcon } from '../assets/phone.svg'

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
        <Input placeholder="Bryan Fury" tooltip="Perpetual power generator?... Incredible." />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('renders with icon', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" IconComponent={PhoneIcon} />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('renders with error', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" hasError />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })

  it('handles the ref and other props simultaneously', () => {
    const mockRef = jest.fn()
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" ref={mockRef} hasError />
      </ThemeProvider>
    )
    expect(getByPlaceholderText('Bryan Fury')).toBeTruthy()
  })
})
