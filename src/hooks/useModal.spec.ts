import { renderHook, act } from '@testing-library/react-hooks'
import useModal from './useModal'

describe('useModal hook', () => {
  it('state should initially be set to false', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.isVisible).toBeFalsy()
  })

  it('state should have a toggleable state', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isVisible).toBeTruthy()
  })
})
