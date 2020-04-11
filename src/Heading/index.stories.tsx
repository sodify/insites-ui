import React from 'react'
import Heading from './'

export default {
  title: 'Heading'
}

export const Basic = () => (
  <>
    <Heading>H1 Heading</Heading>
    <Heading size="l" as="h2">H2 Heading</Heading>
    <Heading size="m" as="h3">H3 Heading</Heading>
  </>
)
