import React from 'react'
import Textarea from './'

export default {
  title: 'Textarea'
}

export const Basic = () => <Textarea placeholder="Message" />
export const WithError = () => <Textarea placeholder="Message" hasError />
