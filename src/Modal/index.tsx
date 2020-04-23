import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import rgba from 'polished/lib/color/rgba'
import Box from '../Box'
import { fadeIn, slideDown } from '../mixins/animations'

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => rgba(props.theme.colors.darkNavy, 0.25)};
  cursor: pointer;
  z-index: 2;
  animation: ${fadeIn} 0.15s ease-out;
`

const ModalContainer = styled(Box)`
  max-width: 36rem;
  width: 100%;
  min-height: 10rem;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem ${(props) => rgba(props.theme.colors.darkNavy, 0.075)};
  padding: 2rem;
  cursor: default;
  animation: ${slideDown} 0.15s ease-out;
`

const Footer = styled(Box)`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const stopPropagation = (e: any) => {
  e.stopPropagation()
}

interface ModalProps {
  isVisible: boolean
  onHide: any
  children?: any
}

const Modal = ({ isVisible, onHide, children }: ModalProps) => {
  return isVisible
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={onHide}>
          <ModalContainer onClick={stopPropagation}>{children}</ModalContainer>
        </ModalOverlay>,
        document.body
      )
    : null
}

Modal.Footer = Footer

export default Modal
