import CountUp from 'react-countup'
import './App.css'

const SECONDS_IN_YEAR = 31_536_000

export default function App() {
  const birthdate = new Date('2002-11-24').getTime()
  const now = Date.now()
  const age = (now - birthdate) / SECONDS_IN_YEAR / 1000

  return (
    <div className="App">
      <CountUp
        start={age}
        end={age + 1}
        duration={SECONDS_IN_YEAR}
        decimals={9}
      />
    </div>
  )
}
