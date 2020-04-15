import React from 'react'
import Text from './'
import Box from '../Box'

export default {
  title: 'Text'
}

export const Basic = () => (
  <Box maxWidth="32rem">
    <Text>
      We've prepared an integration with Slack, so you can get the responses sent to your form straight to your Slack
      workspace's channel.
    </Text>
  </Box>
)
