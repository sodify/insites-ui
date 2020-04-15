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

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  ${HiddenSelectableAppearance};
`

const StyledRadio = styled.div<CheckboxProps>`
  ${SelectableAppearance};
  border-radius: 50%;
`

export default ({ id, children, checked, onChange, ...rest }: any) => (
  <ControlContainer>
    <HiddenRadio id={id} checked={checked} {...rest} />
    <StyledRadio checked={checked} onClick={onChange} />
    <Label onClick={onChange} htmlFor={id}>
      {children}
    </Label>
  </ControlContainer>
)
