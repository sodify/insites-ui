import Box from '../Box'
import styled from 'styled-components'

interface LabelProps {
  htmlFor: string
}

const Label = styled.label<LabelProps>`
  display: block;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-bottom: 0.5rem;
`

const Error = styled.div`
  display: block;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.red};
`

const FormControl: any = styled(Box)`
  margin-bottom: 1rem;
`

FormControl.Label = Label
FormControl.Error = Error

export default FormControl
