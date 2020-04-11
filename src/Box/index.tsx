import styled from 'styled-components'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
} from 'styled-system'

const Box = styled.div<any>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}
  font-family: ${props => props.theme.fonts.body};
`

export default Box
