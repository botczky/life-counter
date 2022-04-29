import CountUp from 'react-countup'
import { differenceInYears } from 'date-fns'

import './App.css'

// const SECONDS_IN_YEAR = 31_536_000

export default function App() {
  const birthdate = new Date('2002-11-24').getTime()

  const prevBirthday = new Date('2021-11-24').getTime()
  const nextBirthday = new Date('2022-11-24').getTime()

  const now = new Date('2022-11-24 02:50').getTime()

  const age =
    differenceInYears(now, birthdate) + ((now - prevBirthday) / (nextBirthday - prevBirthday))

  return (
    <div className="App">
      <CountUp
        start={age}
        end={age + 1}
        duration={(nextBirthday - prevBirthday) / 1000}
        decimals={9}
      />
    </div>
  )
}
