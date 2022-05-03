import { Calendar } from '@mantine/dates'
import DisplayAge from './DisplayAge'
import useAgeState from './useAgeState'

export default function AgeContainer() {
  //
  const [birthdate, setBirthdate] = useAgeState()

  return birthdate === null ? (
    <Calendar value={birthdate} onChange={setBirthdate} />
  ) : (
    <DisplayAge />
  )
}
