import styled from 'styled-components'
import InputAppearance from '../mixins/InputAppearance'

interface SelectProps {
  hasError?: boolean
}

const Select = styled.select<SelectProps>`
  ${InputAppearance};
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQuNSA2LjhMOSAxMS4zbDQuNS00LjYiIHN0cm9rZT0iI0NGRDdERiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+);
  background-repeat: no-repeat;
  background-position: center right 0.75rem;
`

export default Select
