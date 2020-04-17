import { renderHook } from '@testing-library/react-hooks'
import useClickOutside from './useClickOutside'

describe('useClickOutside hook', () => {
  it('state subscribe to DOM events', () => {
    const mockRef = jest.fn()
    const { result } = renderHook(() => useClickOutside(() => {}, mockRef))
    expect(result.error).toBeFalsy()
  })
})
