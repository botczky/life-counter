import { MantineProvider } from '@mantine/core'
import MainContainer from './containers/MainContainer'
import './styles'

export default function App() {
  return (
    <MantineProvider
      theme={{ fontFamilyMonospace: 'Azeret Mono' }}
      withNormalizeCSS
      withGlobalStyles>
      <MainContainer />
    </MantineProvider>
  )
}
