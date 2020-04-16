import React from 'react'
import { render } from '@testing-library/react'
import Modal, { stopPropagation } from './'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

describe('Modal component', () => {
  it('stops event propagation', () => {
    const mockEvent = {
      stopPropagation: jest.fn()
    }
    stopPropagation(mockEvent)
    expect(mockEvent.stopPropagation).toHaveBeenCalled()
  })

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

  it('should not render', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Modal isVisible={false} onHide={() => {}}>
          I'm a modal
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </ThemeProvider>
    )
    expect(queryByText("I'm a modal")).toBeFalsy()
  })
})
