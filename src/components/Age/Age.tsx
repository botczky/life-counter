import CountUp from 'react-countup'
import { Title, Text } from '@mantine/core'
import { differenceInYears, addYears } from 'date-fns'

interface AgeProps {
  birthdate: Date
}

export default function Age({ birthdate }: AgeProps) {
  //
  const now = new Date()

  const ageInt = differenceInYears(now, birthdate)

  const prevBirthday = addYears(birthdate, ageInt)
  const nextBirthday = addYears(birthdate, ageInt + 1)

  const secondsInYear = (+nextBirthday - +prevBirthday) / 1000

  const agePart = (+now - +prevBirthday) / (secondsInYear * 1000)

  const age = ageInt + agePart

  return (
    <div>
      <Title>AGE</Title>
      <Text
        sx={(theme) => ({
          fontFamily: theme.fontFamilyMonospace,
        })}>
        <CountUp
          start={age}
          end={age + 1}
          duration={secondsInYear}
          decimals={9}
        />
      </Text>
    </div>
  )
}
