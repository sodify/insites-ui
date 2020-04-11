import styled  from 'styled-components'
import InputAppearance from '../mixins/InputAppearance'
import ChevronDownIcon from './chevron-down.svg'

interface SelectProps {
  hasError?: boolean
}

const Select = styled.select<SelectProps>`
  ${InputAppearance};
  background-image: url(${ChevronDownIcon});
  background-repeat: no-repeat;
  background-position: center right 0.75rem;
`

export default Select
