import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Toggle from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Checkbox component', () => {
  it('renders', () => {
    let isToggled = false
    const toggle = () => {
      isToggled = !isToggled
    }
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Toggle id="notifications" checked={isToggled} onChange={toggle}>
          Receive notifications
        </Toggle>
      </ThemeProvider>
    )
    fireEvent.click(getByText('Receive notifications'))
    expect(isToggled).toBeTruthy()
  })
})
