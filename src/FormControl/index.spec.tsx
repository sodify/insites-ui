import React from 'react'
import { render } from '@testing-library/react'
import FormControl, { Label, Error } from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Input from '../Input'

describe('Form Control component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormControl>
          <Label htmlFor="displayName">Display name</Label>
          <Input id="displayName" placeholder="Bryan Fury" hasError />
          <Error>Given name is too short.</Error>
        </FormControl>
      </ThemeProvider>
    )
    expect(getByText('Display name')).toBeTruthy()
  })
})
