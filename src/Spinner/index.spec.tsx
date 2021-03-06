import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Spinner from './'

describe('Spinner component', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    )
    expect(getByRole('status')).toBeTruthy()
  })
})
