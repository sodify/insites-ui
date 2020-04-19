import React from 'react'
import styled from 'styled-components'
import {
  ControlContainer,
  HiddenSelectableAppearance,
  SelectableAppearance,
  Label
} from '../mixins/SelectableAppearance'

interface CheckboxProps {
  checked?: boolean
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${HiddenSelectableAppearance};
`

const StyledCheckbox = styled.div<CheckboxProps>`
  ${SelectableAppearance};
  border-radius: 0.25rem;
`

export default React.forwardRef(({ id, children, checked, onChange, ...rest }: any, ref?: any) => (
  <ControlContainer>
    <HiddenCheckbox id={id} checked={checked} ref={ref} readOnly {...rest} />
    <StyledCheckbox checked={checked} onClick={onChange} />
    <Label onClick={onChange} htmlFor={id}>
      {children}
    </Label>
  </ControlContainer>
))
