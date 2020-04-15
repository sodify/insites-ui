import { useState } from 'react'

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  return {
    isVisible,
    toggle
  }
}

export default useModal
