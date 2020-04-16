import styled from 'styled-components'

const Table: any = styled.table`
  min-width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.white};
  border-spacing: 0;
`

const Thead = styled.thead`
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.heading};
`

const Tbody = styled.tbody`
  color: ${(props) => props.theme.colors.text};
`

const Td = styled.td`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
`

const Tr = styled.tr`
  &:last-of-type {
    td {
      border-bottom: none;
    }
  }
`

const Th = styled.th`
  text-transform: uppercase;
  text-align: left;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
`

Table.thead = Thead
Table.tbody = Tbody
Table.td = Td
Table.tr = Tr
Table.th = Th

export default Table
