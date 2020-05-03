import React from 'react'
import Button from './'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  decorators: [withKnobs]
}

const getSizeSelect = () => select('Size', ['', 'small', 'huge'], '', 'SELECT_SIZE')

export const Link = () => <Button size={getSizeSelect()}>Click me</Button>
export const Primary = () => (
  <Button variant="primary" size={getSizeSelect()}>
    Click me
  </Button>
)
export const PrimaryDisabled = () => (
  <Button variant="primary" size={getSizeSelect()} disabled>
    Click me
  </Button>
)
export const Secondary = () => (
  <Button variant="secondary" size={getSizeSelect()}>
    Click me
  </Button>
)
export const Pill = () => (
  <Button variant="pill" size={getSizeSelect()}>
    Click me
  </Button>
)
export const Blank = () => (
  <Button variant="blank" size={getSizeSelect()}>
    Click me
  </Button>
)
export const Tab = () => (
  <>
    <Button variant="tab--active" size={getSizeSelect()}>
      Click me
    </Button>
    <Button variant="tab" size={getSizeSelect()}>
      Click me
    </Button>
    <Button variant="tab" size={getSizeSelect()}>
      Click me
    </Button>
  </>
)
