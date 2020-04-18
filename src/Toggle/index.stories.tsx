import React, { useState } from 'react'
import Toggle from './'

export default {
  title: 'Toggle'
}

export const Basic = () => {
  const [isToggled, setIsToggled] = useState(false)
  const toggle = () => setIsToggled(!isToggled)
  return (
    <Toggle id="notifications" checked={isToggled} onChange={toggle}>
      Receive notifications
    </Toggle>
  )
}
