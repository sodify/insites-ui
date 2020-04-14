import React from 'react'
import FormControl from './'
import Input from '../Input'
import { ReactComponent as PhoneIcon } from '../assets/phone.svg'

export default {
  title: 'FormControl'
}

export const WithLabel = () => (
  <FormControl>
    <FormControl.Label htmlFor="displayName">Display name</FormControl.Label>
    <Input id="displayName" placeholder="Bryan Fury" />
  </FormControl>
)

export const WithError = () => (
  <FormControl>
    <FormControl.Label htmlFor="displayName">Display name</FormControl.Label>
    <Input id="displayName" placeholder="Bryan Fury" hasError />
    <FormControl.Error>Given name is too short.</FormControl.Error>
  </FormControl>
)

export const WithIcon = () => (
  <FormControl>
    <FormControl.Label htmlFor="phoneNumber">Phone number</FormControl.Label>
    <Input id="phoneNumber" placeholder="+48 123 456 789" IconComponent={PhoneIcon} />
  </FormControl>
)
