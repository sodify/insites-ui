import React from 'react'
import styled from 'styled-components'
import InputAppearance from '../mixins/InputAppearance'
import Tooltip from '../Tooltip'
import { ReactComponent as AlertIcon } from './alert-circle.svg'
import { ReactComponent as HelpIcon } from './help.svg'

interface InputProps {
  hasError?: boolean
  hasIcon?: boolean
  tooltip?: string
}

interface IconProps {
  position?: string
}

const InputWrapper = styled.div<InputProps>`
  position: relative;
`

const Icon = styled.div<IconProps>`
  position: absolute;
  top: 0.75rem;

  ${(props) =>
    props.position === 'right'
      ? `
    right: 1rem;
  `
      : `
    left: 1rem;
  `}
`

const Input = styled.input<InputProps>`
  ${InputAppearance};
  position: relative;

  ${(props) =>
    props.hasIcon &&
    `
    padding-left: 3rem;
  `}
`

export default React.forwardRef(({ hasError, IconComponent, tooltip, ...rest }: any, ref?: any) => (
  <InputWrapper hasError={hasError}>
    <Input hasError={hasError} hasIcon={!!IconComponent} ref={ref} {...rest} />
    {tooltip && (
      <Icon position="right">
        <Tooltip.Trigger>
          <HelpIcon />
          <Tooltip.Message>{tooltip}</Tooltip.Message>
        </Tooltip.Trigger>
      </Icon>
    )}
    <Icon>{IconComponent && <IconComponent />}</Icon>
    <Icon position="right">{hasError && <AlertIcon />}</Icon>
  </InputWrapper>
))
