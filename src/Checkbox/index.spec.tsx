import React from 'react'
import { render, screen } from '@testing-library/react'
import Checkbox from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Checkbox component', () => {
  it('renders', () => {
    const mockedOnChange = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Checkbox
          id="rememberMe"
          defaultChecked={true}
          onChange={mockedOnChange}
        >
          Remember me
        </Checkbox>
      </ThemeProvider>
    )
    const linkElement = screen.getByText(/Remember me/i)
    expect(linkElement).toBeInTheDocument()
  })
})
