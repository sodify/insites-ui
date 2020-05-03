import styled from 'styled-components'
import { variant, space, color, typography, layout, SpaceProps } from 'styled-system'

type Variant = 'primary' | 'secondary' | 'pill' | 'blank' | 'tab' | 'tab--active'
type Size = 'small' | 'huge' | ''

interface ButtonProps extends SpaceProps {
  variant?: Variant
  size?: Size
}

const disabledButtonProps = (props: any) => ({
  '&:disabled': {
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.grey,
    cursor: 'not-allowed'
  }
})

const Button = styled.button<ButtonProps>`
  ${space};
  ${color};
  ${typography};
  ${layout};
  border: none;
  font-size: 1rem;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.body};
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  ${(props) =>
    variant({
      variants: {
        primary: {
          color: props.theme.colors.white,
          backgroundColor: props.theme.colors.primary,
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          boxShadow: '0px 0.25rem 0.375rem rgba(31, 55, 108, 0.12)',
          ...disabledButtonProps(props)
        },
        secondary: {
          color: props.theme.colors.primary,
          backgroundColor: props.theme.colors.lightBlue,
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          ...disabledButtonProps(props)
        },
        pill: {
          color: props.theme.colors.green,
          backgroundColor: props.theme.colors.lightGreen,
          padding: '1rem 2rem',
          borderRadius: '2rem',
          ...disabledButtonProps(props)
        },
        blank: {
          backgroundColor: props.theme.colors.white,
          border: `1px ${props.theme.colors.grey} solid`,
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0px 0.125rem 0.25rem rgba(0, 0, 0, 0.04)',
          ...disabledButtonProps(props)
        },
        tab: {
          padding: '0.5rem 1rem',
          color: props.theme.colors.text,
          borderBottom: `2px ${props.theme.colors.grey} solid`
        },
        'tab--active': {
          padding: '0.5rem 1rem',
          color: props.theme.colors.primary,
          borderBottom: `2px ${props.theme.colors.primary} solid`
        }
      }
    })}

  ${variant({
    prop: 'size',
    variants: {
      small: {
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem'
      },
      huge: {
        padding: '1.25rem 2.5rem'
      }
    }
  })}
`

export default Button
