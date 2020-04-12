import React from 'react'
import { render } from '@testing-library/react'
import Select from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Select component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Select>
          <option>L size</option>
        </Select>
      </ThemeProvider>
    )
    expect(getByText('L size')).toBeTruthy()
  })

  it('renders with error', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Select hasError>
          <option>L size</option>
        </Select>
      </ThemeProvider>
    )
    expect(getByText('L size')).toBeTruthy()
  })
})
