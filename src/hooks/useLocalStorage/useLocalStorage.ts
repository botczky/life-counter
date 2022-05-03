import { useState, useCallback } from 'react'
import { useWindowEvent } from '@mantine/hooks'

export default function useLocalStorage(key: string) {
  //
  const initialStateValue = localStorage.getItem(key)

  const [stateValue, setStateValue] = useState(initialStateValue)

  useWindowEvent('local-storage', () => {
    const newValue = localStorage.getItem(key)
    setStateValue(newValue)
  })

  useWindowEvent('storage', (event) => {
    if (event.storageArea === localStorage && event.key === key) {
      const newValue = localStorage.getItem(key)
      setStateValue(newValue)
    }
  })

  // prettier-ignore
  const setStateValueCallback = useCallback((newValue: string | null) => {
    //
    if (newValue !== null) {
      localStorage.setItem(key, newValue)
    } else {
      localStorage.removeItem(key)
    }

    setStateValue(newValue)

    const localStorageEvent = new CustomEvent('local-storage')
    dispatchEvent(localStorageEvent)
  }, [])

  return [stateValue, setStateValueCallback] as const
}
