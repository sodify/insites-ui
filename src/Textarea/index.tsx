import styled from 'styled-components'
import { space } from 'styled-system'
import InputAppearance from '../mixins/InputAppearance'

interface TextareaProps {
  hasError?: boolean
}

const Textarea = styled.textarea<TextareaProps>`
  ${space};
  ${InputAppearance};
`

export default Textarea
