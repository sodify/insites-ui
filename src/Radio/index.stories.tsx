import React, { useState } from 'react'
import Radio from './'

export default {
  title: 'Radio'
}

export const Basic = () => {
  const [selected, setSelected] = useState('l')
  return (
    <>
      <Radio id="sizeL" name="size" value="l" checked={selected === 'l'} onChange={() => setSelected('l')}>
        L
      </Radio>
      <Radio id="sizeXl" name="size" value="xl" checked={selected === 'xl'} onChange={() => setSelected('xl')}>
        XL
      </Radio>
    </>
  )
}
