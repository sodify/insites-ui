import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Container component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Container>Contain it</Container>
      </ThemeProvider>
    )
    expect(screen.queryByText('Contain it')).toBeTruthy()
  })
})
