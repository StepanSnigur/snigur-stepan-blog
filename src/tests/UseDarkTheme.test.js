import { renderHook, act } from '@testing-library/react-hooks'
import useDarkTheme from '../custom-hooks/useDarkTheme'

describe('useDarkTheme', () => {
  const { result } = renderHook(useDarkTheme)
  const [theme, changeTheme] = result.current

  it('Have all values', () => {
    expect(theme).toBeDefined()
    expect(changeTheme).toBeDefined()
  })
  it('Correct default display', () => {
    expect(theme).toBe(false)
  })
})
