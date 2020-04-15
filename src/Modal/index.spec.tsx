import React from 'react'
import { render } from '@testing-library/react'
import Modal from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Modal component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal isVisible={true} onHide={() => {}}>
          I'm a modal
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText("I'm a modal")).toBeTruthy()
  })
})
