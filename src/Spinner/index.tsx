import React from 'react'
import styled from 'styled-components'
import { rotate } from '../mixins/animations'

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border: 0.5rem ${(props) => props.theme.colors.primary} solid;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.colors.primary} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`

const Spinner = (props: any) => (
  <StyledSpinner {...props} role="status">
    <div />
    <div />
    <div />
  </StyledSpinner>
)

export default Spinner
