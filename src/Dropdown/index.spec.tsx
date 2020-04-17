import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Dropdown component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Dropdown Trigger={() => <p>Click me</p>}>Hidden content</Dropdown>
      </ThemeProvider>
    )
    expect(getByText('Click me')).toBeTruthy()
    expect(getByText('Hidden content')).toHaveStyle('visibility: hidden')
  })

  it('toggles hidden content', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Dropdown Trigger={() => <p>Click me</p>}>Hidden content</Dropdown>
      </ThemeProvider>
    )
    fireEvent.click(getByText('Click me'))
    expect(getByText('Hidden content')).toHaveStyle('visibility: visible')
  })
})
