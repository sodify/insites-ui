import React from 'react'
import Input from './'
import Box from '../Box'
import { ReactComponent as PhoneIcon } from '../assets/phone.svg'

export default {
  title: 'Input'
}

export const WithPlaceholder = () => <Input placeholder="Bryan Fury" />
export const Disabled = () => <Input placeholder="Bryan Fury" disabled />
export const WithIcon = () => <Input placeholder="Bryan Fury" IconComponent={PhoneIcon} />
export const WithError = () => <Input placeholder="Bryan Fury" hasError />
export const WithTooltip = () => (
  <Box m="3rem">
    <Input placeholder="Bryan Fury" tooltip="We need to collect this, because..." />
  </Box>
)
