import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Center,
  Box,
} from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { useLocalStorage } from '@mantine/hooks'
import { parseISO, formatISO } from 'date-fns'
import Age from './components/Age'
import ColorSchemeSwitch from './components/ColorSchemeSwitch'
import './styles'

export default function App() {
  //
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [birthdate, setBirthdate] = useLocalStorage<Date | null>({
    key: 'birthdate',
    defaultValue: null,
    serialize: (v) => (v !== null ? formatISO(v) : ''),
    deserialize: (v) => (v ? parseISO(v) : null),
  })

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, fontFamilyMonospace: 'Azeret Mono' }}
        withNormalizeCSS
        withGlobalStyles>
        <Box sx={{ position: 'relative' }}>
          <Center sx={{ height: '100vh' }}>
            {birthdate === null ? (
              <Calendar value={birthdate} onChange={setBirthdate} />
            ) : (
              <Age birthdate={birthdate} />
            )}
          </Center>
          <Box
            sx={(theme) => ({
              position: 'absolute',
              top: theme.spacing.xs,
              right: theme.spacing.xs,
            })}>
            <ColorSchemeSwitch />
          </Box>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
