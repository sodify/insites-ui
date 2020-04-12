import React from 'react'
import { render } from '@testing-library/react'
import Text from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Text component', () => {
  it('renders correctly', () => {
   const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Text>Example text</Text>
      </ThemeProvider>
    )
    expect(getByText('Example text')).toBeTruthy()
  })
})
