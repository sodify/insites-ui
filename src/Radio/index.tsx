import React from 'react'
import styled from 'styled-components'
import {
  ControlContainer,
  HiddenSelectableAppearance,
  SelectableAppearance,
  Label,
  ComponentProps
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

export default React.forwardRef((props: ComponentProps, ref?: any) => {
  const { id, children, checked, onChange, ...rest } = props
  return (
    <ControlContainer>
      <HiddenRadio id={id} checked={checked} ref={ref} readOnly {...rest} />
      <StyledRadio checked={checked} onClick={onChange} />
      <Label onClick={onChange} htmlFor={id}>
        {children}
      </Label>
    </ControlContainer>
  )
})
