import styled from 'styled-components'

const Message = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  top: -1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.darkNavy};
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  min-width: 4rem;
  text-align: center;
  white-space: nowrap;
  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.darkNavy} transparent transparent transparent;
  }
`

const Trigger = styled.span`
  position: relative;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.body};

  &:hover ${Message} {
    visibility: visible;
    opacity: 1;
  }
`

export default {
  Trigger,
  Message
}
