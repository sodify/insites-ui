import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Checkbox component', () => {
  it('renders', () => {
    let isChecked = false
    const toggle = () => {
      isChecked = !isChecked
    }
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox id="rememberMe" checked={isChecked} onChange={toggle}>
          Remember me
        </Checkbox>
      </ThemeProvider>
    )
    fireEvent.click(getByText('Remember me'))
    expect(isChecked).toBeTruthy()
  })
})
