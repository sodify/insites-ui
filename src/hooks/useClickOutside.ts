import { useEffect } from 'react'

const useClickOutside = (callback: Function, ref: any) => {
  useEffect(() => {
    const clickOutsideHandler = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event)
      }
    }
    document.addEventListener('mousedown', clickOutsideHandler)
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler)
    }
  }, [ref, callback])
}

export default useClickOutside
