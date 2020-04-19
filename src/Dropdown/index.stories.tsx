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
    <Button>First option</Button>
    <Button>Second option</Button>
    <Button>Third option</Button>
  </Dropdown>
)
