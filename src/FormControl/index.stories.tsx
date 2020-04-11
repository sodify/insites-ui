import React from 'react'
import FormControl, { Label, Error } from './'
import Input from '../Input'
import { ReactComponent as PhoneIcon } from '../assets/phone.svg'

export default {
  title: 'FormControl'
}

export const WithLabel = () => (
  <FormControl>
    <Label htmlFor="displayName">Display name</Label>
    <Input id="displayName" placeholder="Bryan Fury" />
  </FormControl>
)

export const WithError = () => (
  <FormControl>
    <Label htmlFor="displayName">Display name</Label>
    <Input id="displayName" placeholder="Bryan Fury" hasError />
    <Error>Given name is too short.</Error>
  </FormControl>
)

export const WithIcon = () => (
  <FormControl>
    <Label htmlFor="phoneNumber">Phone number</Label>
    <Input id="phoneNumber" placeholder="+48 123 456 789" IconComponent={PhoneIcon} />
  </FormControl>
)
