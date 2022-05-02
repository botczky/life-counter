import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import MainContainer from './containers/MainContainer'
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

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, fontFamilyMonospace: 'Azeret Mono' }}
        withNormalizeCSS
        withGlobalStyles>
        <MainContainer />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
