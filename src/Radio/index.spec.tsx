import React from 'react'
import { render } from '@testing-library/react'
import Radio from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Radio component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Radio id="sizeL" name="size" value="l" defaultChecked={true}>
          L size
        </Radio>
      </ThemeProvider>
    )
    expect(getByText('L size')).toBeTruthy()
  })
})
