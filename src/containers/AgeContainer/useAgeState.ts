import { parseISO, formatISO } from 'date-fns'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function useAgeState() {
  const [birthdateISO, setBirthdateISO] = useLocalStorage('birthdate')

  const birthdate = birthdateISO === null ? null : parseISO(birthdateISO)

  function setBirthdate(newValue: Date | null) {
    if (newValue !== null) {
      setBirthdateISO(formatISO(newValue))
    } else {
      setBirthdateISO(null)
    }
  }

  return [birthdate, setBirthdate] as const
}
