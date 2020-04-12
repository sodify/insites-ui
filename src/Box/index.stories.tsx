import React from 'react'
import Box from './'

export default {
  title: 'Box'
}

export const Basic = () => (
  <Box
    p="3rem"
    border="3px navy solid"
    background="aquamarine"
    fontSize="2rem"
    fontWeight="bold"
    borderRadius="1rem"
    color="teal"
    maxWidth="32rem"
  >
    Do whatever you'd like 🍻
  </Box>
)
