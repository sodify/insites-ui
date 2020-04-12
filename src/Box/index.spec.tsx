import React from 'react'
import { render } from '@testing-library/react'
import Box from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Box component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Box>I'm a box</Box>
      </ThemeProvider>
    )
    expect(getByText("I'm a box")).toBeTruthy()
  })
})
