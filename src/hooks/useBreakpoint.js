import { useState, useEffect } from 'react'
import { stripUnit } from 'polished'
import debounce from 'lodash.debounce'
import theme from '../style/theme'

const BREAKPOINT_CHANGE_DEBOUNCE_MS = 40

const BREAKPOINT = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
}

function getBreakpoint () {
  if (window.innerWidth < stripUnit(theme.breakpoint[BREAKPOINT.SMALL])) {
    return BREAKPOINT.SMALL
  }

  if (window.innerWidth < stripUnit(theme.breakpoint[BREAKPOINT.MEDIUM])) {
    return BREAKPOINT.MEDIUM
  }

  return BREAKPOINT.LARGE
}

function useBreakpoint () {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint())

  useEffect(() => {
    const listener = debounce(
      () => { setBreakpoint(getBreakpoint()) },
      BREAKPOINT_CHANGE_DEBOUNCE_MS
    )

    window.addEventListener('resize', listener)
    return () => { window.removeEventListener('resize', listener) }
  }, [])

  return breakpoint
}

export default useBreakpoint
export { BREAKPOINT }
