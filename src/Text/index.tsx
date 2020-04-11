import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.text};
  line-height: 2rem;
  letter-spacing: 0.02rem;
`

export default Text
