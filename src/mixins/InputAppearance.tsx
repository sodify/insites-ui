import { css } from 'styled-components'
import rgba from 'polished/lib/color/rgba'
import lighten from 'polished/lib/color/lighten'

interface InputAppearanceProps {
  hasError?: boolean
}

const InputAppearance = css<InputAppearanceProps>`
  appearance: none;
  display: flex;
  width: 100%;
  border: 1px ${(props) => props.theme.colors.grey} solid;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.body};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);
  box-sizing: border-box;

  &:disabled {
    background-color: ${(props) => rgba(props.theme.colors.grey, 0.2)};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: 1px ${(props) => props.theme.colors.inputFocused} solid;
    box-shadow: 0 0.125rem 0.5rem ${rgba('#202C4B', 0.08)};
  }

  &::placeholder {
    color: ${(props) => lighten(0.25, props.theme.colors.text)};
  }

  ${(props) =>
    props.hasError &&
    `
    border: 1px ${props.theme.colors.red} solid;
  `}
`

export default InputAppearance
