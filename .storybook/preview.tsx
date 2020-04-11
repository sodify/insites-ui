require('typeface-inter')
import React from 'react'
import theme from '../src/theme'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

addDecorator(story =>
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
)
