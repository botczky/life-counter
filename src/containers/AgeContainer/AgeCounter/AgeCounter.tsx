import CountUp from 'react-countup'
import { differenceInYears, addYears } from 'date-fns'

interface AgeCounterProps {
  birthdate: Date
}

export default function AgeCounter({ birthdate }: AgeCounterProps) {
  //
  const now = new Date()

  const ageInt = differenceInYears(now, birthdate)

  const prevBirthday = addYears(birthdate, ageInt)
  const nextBirthday = addYears(birthdate, ageInt + 1)

  const secondsInYear = (+nextBirthday - +prevBirthday) / 1000

  const agePart = (+now - +prevBirthday) / (secondsInYear * 1000)

  const age = ageInt + agePart

  return (
    <CountUp start={age} end={age + 1} duration={secondsInYear} decimals={9} />
  )
}
