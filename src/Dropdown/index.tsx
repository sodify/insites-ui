import React, { useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Box from '../Box'

interface DropdownProps {
  children?: React.ReactNode
  Trigger?: any
}

const StyledDropdown = styled(Box)`
  position: relative;
`

const Content = styled(Box)`
  display: none;
  position: absolute;
  bottom: -4rem;
  box-shadow: 0 0 1rem ${(props) => rgba(props.theme.colors.darkNavy, 0.1)};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  min-width: 10rem;
  padding: 1rem;

  ${(props) =>
    props.isVisible &&
    `
    display: block;
  `}

  &::after {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 2rem;
    transform: translate(-50%, -50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent ${(props) => props.theme.colors.white} transparent;
  }
`

const StyledTrigger = styled(Box)`
  cursor: pointer;
`

const Dropdown = ({ children, Trigger }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <StyledDropdown>
      <StyledTrigger onClick={toggle}>
        <Trigger />
      </StyledTrigger>
      <Content isVisible={isVisible}>{children}</Content>
    </StyledDropdown>
  )
}

export default Dropdown
