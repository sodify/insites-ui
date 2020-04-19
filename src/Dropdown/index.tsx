import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Box from '../Box'
import useClickOutside from '../hooks/useClickOutside'

interface DropdownProps {
  children?: React.ReactNode
  Trigger?: any
}

const StyledDropdown = styled(Box)`
  display: inline-block;
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 2;
  box-shadow: 0 0 1rem ${(props) => rgba(props.theme.colors.darkNavy, 0.1)};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  min-width: 10rem;
  padding: 1rem;
  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;

  ${(props) =>
    props.isVisible &&
    `
    visibility: visible;
    opacity: 1;
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
  position: relative;
  cursor: pointer;
`

const Dropdown = ({ children, Trigger }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsVisible(!isVisible)
  }
  const contentRef = useRef(null)
  useClickOutside((event: any) => {
    const clickedTrigger = event?.path[1]?.classList?.contains('dropdown-trigger')
    if (!clickedTrigger) setIsVisible(false)
  }, contentRef)

  return (
    <StyledDropdown>
      <StyledTrigger className="dropdown-trigger" onClick={toggle}>
        <Trigger />
      </StyledTrigger>
      <Content isVisible={isVisible} ref={contentRef}>
        {children}
      </Content>
    </StyledDropdown>
  )
}

export default Dropdown
