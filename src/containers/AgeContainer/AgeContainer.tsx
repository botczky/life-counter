import { useLocalStorage } from '@mantine/hooks'
import { Calendar } from '@mantine/dates'
import { parseISO, formatISO } from 'date-fns'
import AgeCounter from './AgeCounter'

export default function AgeContainer() {
  //
  const [birthdate, setBirthdate] = useLocalStorage<Date | null>({
    key: 'birthdate',
    defaultValue: null,
    serialize: (v) => (v !== null ? formatISO(v) : ''),
    deserialize: (v) => (v ? parseISO(v) : null),
  })

  return birthdate === null ? (
    <Calendar value={birthdate} onChange={setBirthdate} />
  ) : (
    <AgeCounter birthdate={birthdate} />
  )
}
