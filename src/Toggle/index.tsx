import React from 'react'
import styled, { css } from 'styled-components'
import { ControlContainer, HiddenSelectableAppearance, Label, ComponentProps } from '../mixins/SelectableAppearance'
import rgba from 'polished/lib/color/rgba'

interface CheckboxProps {
  checked?: boolean
}

const HiddenToggle = styled.input.attrs({ type: 'checkbox' })`
  ${HiddenSelectableAppearance};
`

const StyledToggle = styled.div<CheckboxProps>`
  width: 2.75rem;
  height: 1.5rem;
  background-color: ${(props) => rgba(props.theme.colors.grey, 0.75)};
  transition: background-color 0.1s ease-out;
  box-shadow: 0 0.125rem 0.25rem ${rgba('#000', 0.04)};
  cursor: pointer;
  border-radius: 2.75rem;
  position: relative;

  &::after {
    content: '';
    height: 1.25rem;
    width: 1.25rem;
    background-color: ${(props) => props.theme.colors.white};
    transition: left 0.1s ease-out;
    border-radius: 50%;
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: ${props.theme.colors.primary};

      &::after {
        left: calc(100% - 1.375rem);
      }
    `}
`

export default React.forwardRef((props: ComponentProps, ref?: any) => {
  const { id, children, checked, onChange, ...rest } = props
  return (
    <ControlContainer>
      <HiddenToggle id={id} checked={checked} ref={ref} readOnly {...rest} />
      <StyledToggle checked={checked} onClick={onChange} />
      <Label onClick={onChange} htmlFor={id}>
        {children}
      </Label>
    </ControlContainer>
  )
})
