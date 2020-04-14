import React from 'react'
import { render } from '@testing-library/react'
import FormControl from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Input from '../Input'

describe('Form Control component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormControl>
          <FormControl.Label htmlFor="displayName">Display name</FormControl.Label>
          <Input id="displayName" placeholder="Bryan Fury" hasError />
          <FormControl.Error>Given name is too short.</FormControl.Error>
        </FormControl>
      </ThemeProvider>
    )
    expect(getByText('Display name')).toBeTruthy()
  })
})
