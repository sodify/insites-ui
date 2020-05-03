import React from 'react'
import Select from './'

export default {
  title: 'Select'
}

export const Basic = () => (
  <Select>
    <option>Test</option>
  </Select>
)

export const Disabled = () => (
  <Select disabled>
    <option>Test</option>
  </Select>
)

export const WithError = () => (
  <Select hasError>
    <option>Test</option>
  </Select>
)
