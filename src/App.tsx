import { Calendar } from '@mantine/dates'
import { useLocalStorage } from '@mantine/hooks'
import { parseISO, formatISO } from 'date-fns'
import Age from './components/Age'

import './App.css'

export default function App() {
  const [birthdate, setBirthdate] = useLocalStorage<Date | null>({
    key: 'birthdate',
    defaultValue: null,
    serialize: (v) => (v !== null ? formatISO(v) : ''),
    deserialize: (v) => (v ? parseISO(v) : null),
  })

  return (
    <div className="App">
      {birthdate === null ? (
        <Calendar value={birthdate} onChange={setBirthdate} />
      ) : (
        <Age birthdate={birthdate} />
      )}
    </div>
  )
}
