import { MantineProvider, Center } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { useLocalStorage } from '@mantine/hooks'
import { parseISO, formatISO } from 'date-fns'
import Age from './components/Age'
import './styles'

export default function App() {
  const [birthdate, setBirthdate] = useLocalStorage<Date | null>({
    key: 'birthdate',
    defaultValue: null,
    serialize: (v) => (v !== null ? formatISO(v) : ''),
    deserialize: (v) => (v ? parseISO(v) : null),
  })

  return (
    <MantineProvider
      theme={{ fontFamilyMonospace: 'Azeret Mono' }}
      withNormalizeCSS>
      <Center sx={{ height: '100vh' }}>
        {birthdate === null ? (
          <Calendar value={birthdate} onChange={setBirthdate} />
        ) : (
          <Age birthdate={birthdate} />
        )}
      </Center>
    </MantineProvider>
  )
}
