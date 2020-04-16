import React from 'react'
import Table from './'

export default {
  title: 'Table'
}

export const Basic = () => (
  <Table>
    <Table.thead>
      <Table.tr>
        <Table.th>Name</Table.th>
        <Table.th>Title</Table.th>
        <Table.th>Phone</Table.th>
      </Table.tr>
    </Table.thead>
    <Table.tbody>
      <Table.tr>
        <Table.td>Kathy C. Do</Table.td>
        <Table.td>Director</Table.td>
        <Table.td>+48 216-834-154</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>James D. Washington</Table.td>
        <Table.td>Developer</Table.td>
        <Table.td>+48 559-529-973</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>Elaine R. Bean</Table.td>
        <Table.td>Product Owner</Table.td>
        <Table.td>+48 248-905-242</Table.td>
      </Table.tr>
    </Table.tbody>
  </Table>
)
