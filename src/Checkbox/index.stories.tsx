import React, { useState } from 'react'
import Checkbox from './'

export default {
  title: 'Checkbox'
}

export const Basic = () => {
  const [isChecked, setIsChecked] = useState(false)
  const toggle = () => setIsChecked(!isChecked)
  return (
    <Checkbox id="rememberMe" checked={isChecked} onChange={toggle}>
      Remember me
    </Checkbox>
  )
}
