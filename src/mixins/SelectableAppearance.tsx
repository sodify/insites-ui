import styled, { css } from 'styled-components'
import { hideVisually, rgba } from 'polished'
import CheckIcon from './check.svg'

interface SelectableProps {
  checked?: boolean
}

const HiddenSelectableAppearance = css`
  ${hideVisually()};
`

const SelectableAppearance = css<SelectableProps>`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px ${props => props.theme.colors.grey} solid;
  background-color: ${props => props.theme.colors.white};
  transition: background-color 0.1s ease-out;
  box-shadow: 0 0.125rem 0.25rem ${rgba('#000', 0.04)};
  cursor: pointer;
  
  ${props => props.checked && `
    background-color: ${props.theme.colors.primary};
    background-image: url(${CheckIcon});
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px ${props.theme.colors.white} solid;
  `}
`

const ControlContainer = styled.div`
  display: flex;
  font-family: ${props => props.theme.fonts.body};
`

const Label = styled.label`
  margin: 0.125rem 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
`

export {
  ControlContainer,
  HiddenSelectableAppearance,
  SelectableAppearance,
  Label
}
