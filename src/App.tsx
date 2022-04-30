import { Calendar } from '@mantine/dates'
import { useLocalStorage } from '@mantine/hooks'
import { parseISO, formatISO, differenceInYears, addYears } from 'date-fns'
import CountUp from 'react-countup'

import './App.css'

export default function App() {
  const [birthdate, setBirthdate] = useLocalStorage<Date | null>({
    key: 'birthdate',
    defaultValue: null,
    serialize: (v) => (v !== null ? formatISO(v) : ''),
    deserialize: (v) => (v ? parseISO(v) : null),
  })

  let age
  let secondsInYear

  if (birthdate !== null) {
    let ageInt
    let agePart
    let prevBirthday
    let nextBirthday

    let now = new Date('2022-11-24 00:00+03')

    ageInt = differenceInYears(now, birthdate)

    prevBirthday = addYears(birthdate, ageInt)
    nextBirthday = addYears(birthdate, ageInt + 1)

    secondsInYear = (+nextBirthday - +prevBirthday) / 1000

    agePart = (+now - +prevBirthday) / (secondsInYear * 1000)

    age = ageInt + agePart
  }

  return (
    <div className="App">
      {birthdate === null ? (
        <Calendar value={birthdate} onChange={setBirthdate} />
      ) : (
        <CountUp
          start={age}
          end={(age as number) + 1}
          duration={secondsInYear}
          decimals={9}
        />
      )}
    </div>
  )
}
