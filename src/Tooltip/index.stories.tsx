import React from 'react'
import Tooltip from './'
import Box from '../Box'

export default {
  title: 'Tooltip'
}

export const Basic = () => (
  <Box m="3rem 1rem">
    <Tooltip.Trigger>
      Hover me
      <Tooltip.Message>Hmmm</Tooltip.Message>
    </Tooltip.Trigger>
  </Box>
)
