import React from 'react'
import Dropdown from './'
import Button from '../Button'

export default {
  title: 'Dropdown'
}

export const Basic = () => (
  <Dropdown
    Trigger={() => (
      <Button variant="secondary" size="small">
        Click me
      </Button>
    )}
  >
    Hidden content
  </Dropdown>
)
