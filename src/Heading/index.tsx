import styled from 'styled-components'

interface HeadingProps {
  size?: string
}

const HEADING_SIZES: {[key: string]: string} = {
  xl: '2rem',
  l: '1.5rem',
  m: '1.25rem'
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${props => HEADING_SIZES[props.size || 'xl']};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.heading};
  letter-spacing: 0.02rem;
`

export default Heading
