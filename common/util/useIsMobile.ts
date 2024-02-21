import { useEffect, useState } from 'react'

const MOBILE_BREAK_POINT = 640

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAK_POINT)
    }

    if (typeof window !== 'undefined') {
      onResize()
      window.addEventListener('resize', onResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize)
      }
    }
  }, [])

  return isMobile
}
