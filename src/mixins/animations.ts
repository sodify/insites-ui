import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const slideDown = keyframes`
  from {
    transform: translateY(-0.5rem);
  }
  
  to {
    transform: translateY(0);
  }
`
