import React from 'react'
import { render } from '@testing-library/react'
import Tooltip from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Textarea component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Tooltip.Trigger>
          Hover me
          <Tooltip.Message>Hmmm</Tooltip.Message>
        </Tooltip.Trigger>
      </ThemeProvider>
    )
    expect(getByText('Hover me')).toBeTruthy()
  })
})
