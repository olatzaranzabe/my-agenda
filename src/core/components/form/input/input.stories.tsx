import React, { useState } from 'react'
import { Input } from './input'

export default {
  title: 'Input',
  component: Input
}
const WithState: React.FC<{isRequired: boolean}> = ({isRequired}) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input required={isRequired} value={value} label="My input" onChange={setValue}></Input>
    </>
  )
}
export const base = ()=> < WithState isRequired={false} />
export const required = ()=> < WithState isRequired={true} />
