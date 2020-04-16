import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Table from './index'

describe('Table component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Table>
          <Table.thead>
            <Table.tr>
              <Table.th>Name</Table.th>
            </Table.tr>
          </Table.thead>
          <Table.tbody>
            <Table.tr>
              <Table.td>Kathy C. Do</Table.td>
            </Table.tr>
          </Table.tbody>
        </Table>
      </ThemeProvider>
    )
    expect(getByText('Name')).toBeTruthy()
    expect(getByText('Kathy C. Do')).toBeTruthy()
  })
})
